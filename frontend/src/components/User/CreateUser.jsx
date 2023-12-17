import { useState } from 'react';
import More from '../../assets/icons/More.svg';
import { useUserStore } from '../../store/userStore';
import { useForm } from 'react-hook-form';

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const userStore = useUserStore();

  const onSubmit = async (data) => {
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      birthday,
      gender,
      role,
      urlImage,
    } = data;
    try {
      console.log('Enviando datos al servidor:', data);
      await userStore.register(
        firstName,
        lastName,
        email,
        password,
        phone,
        birthday,
        gender,
        role,
        urlImage,
      );
      alert('Usuario creado');
      reset();
      document.getElementById('my_modal_4').close();
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error durante el registro: ' + error.message);
    }
  };
  return (
    <>
      <button
        className='btn btn-primary  flex w-full p-4'
        onClick={() => document.getElementById('my_modal_4').showModal()}
      >
        <img src={More} alt='More' />
        Crear Nueva Cuenta
      </button>
      <dialog id='my_modal_4' className='open modal '>
        <div className='modal-box flex flex-col items-center overflow-auto overflow-x-hidden'>
          <h3 className='justify-center text-4xl font-bold'>Nuevo Usuario</h3>
          <p className='py-4'>Ingrese la informacion solicitada </p>

          <form
            className='mt-4 space-y-4'
            method='dialog'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
              onClick={() => {
                document.getElementById('my_modal_4').close();
                reset();
              }}
            >
              ✕
            </div>
            <div className='flex space-x-4'>
              <div className='flex flex-col'>
                <label className='font-medium'>Nombre</label>
                <input
                  type='text'
                  className={`input input-bordered font-medium ${
                    errors.firstName ? 'input-error' : 'input-primary'
                  }`}
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
                  <span className='mb-1 text-center text-sm text-error-content'>
                    El Nombre es requerido
                  </span>
                )}
              </div>
              <div className='flex flex-col'>
                <label className='font-medium'>Apellido</label>
                <input
                  type='text'
                  className={`input input-bordered font-medium ${
                    errors.lastName ? 'input-error' : 'input-primary'
                  }`}
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && (
                  <span className='mb-1 text-center text-sm text-error-content'>
                    El Apellido es requerido
                  </span>
                )}
              </div>
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                className={`input input-bordered ${
                  errors.email ? 'input-error' : 'input-primary'
                }`}
                {...register('email', {
                  required: 'El correo electrónico es obligatorio',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:
                      'Ingresa una dirección de correo electrónico válida',
                  },
                })}
              />
              {errors.email && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Número de teléfono</label>
              <input
                type='number'
                className={`input input-bordered ${
                  errors.phone ? 'input-error' : 'input-primary'
                }`}
                {...register('phone', {
                  required: 'El número de teléfono es obligatorio',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message:
                      'Ingresa un número de teléfono válido (10 dígitos)',
                  },
                  maxLength: {
                    value: 10,
                    message:
                      'El número de teléfono no debe exceder los 10 dígitos',
                  },
                  minLength: {
                    value: 10,
                    message:
                      'El número de teléfono debe tener al menos 10 dígitos',
                  },
                })}
              />
              {errors.phone && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Fecha de Nacimiento</label>
              <input
                type='date'
                className={`input input-bordered ${
                  errors.birthday ? 'input-error' : 'input-primary'
                }`}
                {...register('birthday', { required: true })}
              />
              {errors.birthday && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  La Fecha de Nacimiento es requerida
                </span>
              )}
            </div>

            <div className='flex flex-col'>
              <label className='font-medium'>Tipo de Usuario</label>
              <select
                type='text'
                className={`input input-bordered ${
                  errors.role ? 'input-error' : 'input-primary'
                }`}
                {...register('role', { required: true })}
              >
                <option value=''></option>
                <option value='usuario' className='text-neutral-950'>
                  Usuario
                </option>
                <option value='portero' className='text-neutral-950'>
                  Portero
                </option>
              </select>
              {errors.role && (
                <span className='mb-1 text-center text-sm text-error-content'>
                  Selecciona un tipo de usuario
                </span>
              )}
            </div>
            <div className='flex flex-col'>
              <button
                type='submit'
                className='btn btn-primary mt-4'
                // onClick={() => document.getElementById('my_modal_4').close()}
              >
                Crear Usuario
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

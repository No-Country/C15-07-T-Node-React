import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
export default function ModalComponent({ button, title, onSubmit }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const { handleSubmit, register, reset } = useForm();

  const handleInputChange = (event) => {
    const textLength = event.target.value.length;
    if (textLength <= 30) {
      setCount(textLength);
      setInputValue(event.target.value);
    }
  };
  return (
    <>
      <button
        className='btn btn-primary  flex  p-4'
        onClick={() => document.getElementById('my_modal_3').showModal()}>
        {button}
      </button>
      <dialog id='my_modal_3' className='modal '>
        <div className='modal-box flex w-96 flex-col items-center overflow-auto overflow-x-hidden p-2'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <form
            className='mt-4 space-y-4'
            method='dialog'
            onSubmit={handleSubmit(onSubmit)}>
            <button
              className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
              onClick={() => {
                document.getElementById('my_modal_3').close();
                reset();
                handleInputChange({ target: { value: '' } });
              }}>
              ✕
            </button>
            <div className='flex-col'>
              <div className=''>
                <label className='font-bold'>Titulo</label>
                <input
                  {...register('title', { required: true })}
                  type='text'
                  placeholder='Titulo de Observacion'
                  className='input input-bordered input-lg max-h-12 w-full'
                  onChange={handleInputChange}
                  value={inputValue}
                />
                <div className='label'>
                  <span className='label-text-alt'></span>
                  <span
                    className={`label-text-alt mt-[-10px] text-lg font-semibold ${
                      count === 30 ? 'text-red-500' : 'text-gray-500'
                    }`}>
                    {count} / 30
                  </span>
                </div>
              </div>
              <div className=' '>
                <label className='font-bold'>Descripcion</label>
                <textarea
                  {...register('description', { required: true })}
                  placeholder='Bio'
                  className='textarea textarea-bordered  textarea-lg  max-h-full w-full resize-none'></textarea>
              </div>
              <div className='flex flex-col'>
                <button
                  type='submit'
                  className='btn btn-primary mt-4'
                  onClick={() => {
                    document.getElementById('my_modal_3').close();
                  }}>
                  Enviar Solicitud
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

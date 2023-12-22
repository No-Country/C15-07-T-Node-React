import NavBar from '../../components/NavBar/NavBar';

export default function Developers() {
  return (
    <>
      <NavBar />
      <div className='flex grow flex-col items-center gap-6 bg-[#f8f8f8] p-4'>
        <h1 className='m-8 text-4xl font-bold'>Tecnologías</h1>
        <div className='flex gap-6'>
          <img
            className='h-12'
            src='https://imgs.search.brave.com/zLEJWjVEV0R2jeAPEXiq9x2RBItEXNCazobjDEElspU/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2Q5L05v/ZGUuanNfbG9nby5z/dmcvNjQwcHgtTm9k/ZS5qc19sb2dvLnN2/Zy5wbmc'
          />
          <img
            src='https://imgs.search.brave.com/F76k1XhX58wyrQFqZ2KzrTozh5CKBqVaomacyZJovKU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MzBmNWNlZjEw/MTRjMGI1ZTRhYTEu/cG5n'
            className='h-12'
          />
          <img
            className='h-12'
            src='https://imgs.search.brave.com/GMYO8VpqXumVpB0hwPXZlvw1Y0ctkqwSPZms8YtO798/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXNh/cnJvbGxvd2ViLmNv/bS9zdG9yYWdlL3Rh/Z19pbWFnZXMvYWN0/dWFsL0YyQ2FtNkpt/SHFjdnliNlkwR1Zs/N2xTQ3FBNHRFWUxN/dWZMbTVPSG8ucG5n'
          />
          <img
            src='https://zustand-demo.pmnd.rs/logo512.png'
            className='h-12'
          />
          <img src='https://sequelize.org/img/logo.svg' className='h-12' />
          <img
            src='https://imgs.search.brave.com/DW1vVrO9jZo_AwWhIZqe_EboE8r6FeerkIjEJNDufuE/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzI5L1Bv/c3RncmVzcWxfZWxl/cGhhbnQuc3ZnLzY0/MHB4LVBvc3RncmVz/cWxfZWxlcGhhbnQu/c3ZnLnBuZw'
            className='h-12'
          />
          <img
            src='https://imgs.search.brave.com/6MgsYXws0MojRCgw42PgQqvzTVbBwjsoi-lL2LJdU5w/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85LzkxL09j/dGljb25zLW1hcmst/Z2l0aHViLnN2Zy82/NDBweC1PY3RpY29u/cy1tYXJrLWdpdGh1/Yi5zdmcucG5n'
            className='h-12'
          />
          <img
            src='https://imgs.search.brave.com/kFo_gCuFjqL4_uIpz7Tsj-c8fb8T1SwZq25UBihWgM4/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I4L05l/dGxpZnlfbG9nby5z/dmcvNjQwcHgtTmV0/bGlmeV9sb2dvLnN2/Zy5wbmc'
            className='h-12'
          />
          <img src='https://railway.app/brand/logo-dark.svg' className='h-12' />
        </div>
        <h1 className='m-8 text-4xl font-bold'>Desarrolladores</h1>
        <div className='flex w-full max-w-6xl flex-col items-center justify-center rounded-md border bg-white p-4'>
          <h3 className='mb-4 font-bold'>Frontend</h3>
          <div className='m-2 flex gap-8'>
            <div className='flex flex-col items-center'>
              <div className='avatar shadow-md'>
                <div className='w-24 rounded'>
                  <img src='https://avatars.githubusercontent.com/u/86517179?v=4' />
                </div>
              </div>
              <div className='m-2 flex flex-col items-center justify-center'>
                <h4>Agustín</h4>
                <p className='flex gap-2'>
                  <a href='https://github.com/Tiin24'>
                    <ion-icon size='large' name='logo-github'></ion-icon>
                  </a>
                  <a href='https://www.linkedin.com/in/isaias-romero/'>
                    <ion-icon size='large' name='logo-linkedin'></ion-icon>
                  </a>
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='avatar shadow-md'>
                <div className='w-24 rounded'>
                  <img src='https://avatars.githubusercontent.com/u/12972468?v=4' />
                </div>
              </div>
              <div className='m-2 flex flex-col items-center justify-center'>
                <h4>Albert</h4>
                <p className='flex gap-2'>
                  <a href='https://github.com/agomezjuan'>
                    <ion-icon size='large' name='logo-github'></ion-icon>
                  </a>
                  <a href='https://linkedin.com/in/agomezjuan'>
                    <ion-icon size='large' name='logo-linkedin'></ion-icon>
                  </a>
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='avatar shadow-md'>
                <div className='w-24 rounded'>
                  <img src='https://avatars.githubusercontent.com/u/87555292?v=4' />
                </div>
              </div>
              <div className='m-2 flex flex-col items-center justify-center'>
                <h4>Ezequiel</h4>
                <p className='flex gap-2'>
                  <a href='https://github.com/rretta'>
                    <ion-icon size='large' name='logo-github'></ion-icon>
                  </a>
                  <a href='https://www.linkedin.com/in/ezequiel-berretta/'>
                    <ion-icon size='large' name='logo-linkedin'></ion-icon>
                  </a>
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <div className='avatar shadow-md'>
                <div className='w-24 rounded'>
                  <img src='https://avatars.githubusercontent.com/u/95093795?v=4' />
                </div>
              </div>
              <div className='m-2 flex flex-col items-center justify-center'>
                <h4>Fabian</h4>
                <p className='flex gap-2'>
                  <a href='https://github.com/fabianeromano'>
                    <ion-icon size='large' name='logo-github'></ion-icon>
                  </a>
                  <a href='https://www.linkedin.com/in/fabian-edgardo-romano/'>
                    <ion-icon size='large' name='logo-linkedin'></ion-icon>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full max-w-6xl flex-col items-center justify-center rounded-md border bg-white p-4'>
          <h3 className='mb-4 font-bold'>Backend</h3>
          <div className='m-2 flex gap-8'>
            <div className='flex flex-col items-center'>
              <div className='avatar shadow-md'>
                <div className='w-24 rounded'>
                  <img src='https://avatars.githubusercontent.com/u/100742080?v=4' />
                </div>
              </div>
              <div className='m-2 flex flex-col items-center justify-center'>
                <h4>David</h4>
                <p className='flex gap-2'>
                  <a href='https://github.com/deca-dev'>
                    <ion-icon size='large' name='logo-github'></ion-icon>
                  </a>
                  <a href='https://www.linkedin.com/in/davidcastroanaya/'>
                    <ion-icon size='large' name='logo-linkedin'></ion-icon>
                  </a>
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <div className='avatar shadow-md'>
                <div className='w-24 rounded'>
                  <img src='https://avatars.githubusercontent.com/u/93558180?v=4' />
                </div>
              </div>
              <div className='m-2 flex flex-col items-center justify-center'>
                <h4>Marcelo</h4>
                <p className='flex gap-2'>
                  <a href='https://github.com/diazarm'>
                    <ion-icon size='large' name='logo-github'></ion-icon>
                  </a>
                  <a href='https://www.linkedin.com/in/marcelo-a-diaz-6a7926223/'>
                    <ion-icon size='large' name='logo-linkedin'></ion-icon>
                  </a>
                </p>
              </div>
            </div>
            <div className='flex flex-col items-center opacity-20'>
              <div className='avatar shadow-md'>
                <div className='w-24 rounded grayscale-0'>
                  <img src='https://avatars.githubusercontent.com/u/115433143?v=4' />
                </div>
              </div>
              <div className='m-2 flex flex-col items-center justify-center'>
                <h4>Enmanuel</h4>
                <p className='flex gap-2'>
                  <a href='https://github.com/rodmacPy'>
                    <ion-icon size='large' name='logo-github'></ion-icon>
                  </a>
                  <a href='https://www.linkedin.com/in/enmanuelrodmac/'>
                    <ion-icon size='large' name='logo-linkedin'></ion-icon>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full max-w-6xl items-center justify-center gap-6'>
          <div className='flex w-full flex-col items-center justify-center rounded-md border bg-white p-4'>
            <h3 className='mb-4 font-bold'>Testers - QA</h3>
            <div className='m-2 flex gap-8'>
              <div className='flex flex-col items-center'>
                <div className='avatar shadow-md'>
                  <div className='w-24 rounded'>
                    <img src='https://avatars.githubusercontent.com/u/86728610?v=4' />
                  </div>
                </div>
                <div className='m-2 flex flex-col items-center justify-center'>
                  <h4>Agustina</h4>
                  <p className='flex gap-2'>
                    <a href='https://github.com/AgustinaGmz'>
                      <ion-icon size='large' name='logo-github'></ion-icon>
                    </a>
                    <a href='https://www.linkedin.com/in/agustina-gim%C3%A9nez-9622221b2/'>
                      <ion-icon size='large' name='logo-linkedin'></ion-icon>
                    </a>
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center '>
                <div className='avatar shadow'>
                  <div className='w-24 rounded'>
                    <img src='https://bryan-av.github.io/portfolio/img/me.png' />
                  </div>
                </div>
                <div className='m-2 flex flex-col items-center justify-center'>
                  <h4>Bryan</h4>
                  <p className='flex gap-2'>
                    <a href='https://github.com/Bryan-AV'>
                      <ion-icon size='large' name='logo-github'></ion-icon>
                    </a>
                    <a href='https://www.linkedin.com/in/bryan-aguilar29/'>
                      <ion-icon size='large' name='logo-linkedin'></ion-icon>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-full flex-col items-center justify-center rounded-md border bg-white p-4'>
            <h3 className='mb-4 font-bold'>Team Leader</h3>
            <div className='m-2 flex gap-8'>
              <div className='flex flex-col items-center'>
                <div className='avatar'>
                  <div className='w-24 rounded'>
                    <img src='https://cdn.discordapp.com/avatars/936827224567480322/3d42394f9787298190cb4bc4ab9c4a6c.webp?size=160' />
                  </div>
                </div>
                <div className='m-2 flex flex-col items-center justify-center'>
                  <h4>Melanie</h4>
                  <p className='flex gap-2'>
                    <a href=''>
                      <ion-icon size='large' name='logo-github'></ion-icon>
                    </a>
                    <a href=''>
                      <ion-icon size='large' name='logo-linkedin'></ion-icon>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='m-12 flex flex-col items-center justify-center'>
          <p className='text-center'>
            Hecho con{' '}
            <span role='img' aria-label='heart'>
              ❤️
            </span>{' '}
            en No Country
          </p>
        </div>
      </div>
    </>
  );
}

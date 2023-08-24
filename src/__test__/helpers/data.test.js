/**
 * @jest-environment jsdom
 */
import { miDescripcion, proyectos } from '../../helpers/data'

const proyectosForTest = [
  {
    titulo: 'INSTAGAMA',
    descripcion:
      'Proyecto con objetivo académico y practico , en donde creo un clon funcional de Instagram con sus funcionalidades básicas. implementando tecnologías como vite, MERN, sockets entre otras.',
    tecnologias: [
      'React',
      'Node',
      'Express',
      'MongoDb',
      'Tailwindcss',
      'Sockets.io',
      'Cloudinary'
    ],
    url: 'https://insta-gama.vercel.app/',
    codigo: 'https://github.com/GamaDev-Andres/instaGama',
    poster:
      'https://res.cloudinary.com/dapa84kxy/image/upload/v1652509941/portafolio/instaGama/Image_1_n55ffj.png',
    detalles: [
      {
        titulo: 'Video presentacion de InstaGama',
        data: 'En este video se resumen las funcionalidades principales del proyecto.',
        videos: [
          'https://res.cloudinary.com/dapa84kxy/video/upload/v1653062397/portafolio/2022-05-14_22-38-31_ru2dv2.mp4'
        ]
      }
    ],
    fotos: []
  },
  {
    titulo: 'BARBERAPP',
    descripcion: `Aplicación realizada con el stack MERN y styled components,
     enfocada en la administración de una barbería en donde el cliente tiene 
     permitido agendar una cita con un barbero basándose en su perfil ,
      cortes o calificación de otros clientes.`,
    tecnologias: [
      'React',
      'Express',
      'StyledComponents',
      'MongoDb',
      'Reducers'
    ],
    url: 'https://barberappag.netlify.app/',
    codigo: 'https://github.com/GamaDev-Andres/BarberApp-fe',
    poster:
      'https://res.cloudinary.com/dapa84kxy/image/upload/v1644874961/portafolio/barberapp/barberapp_sdpgwl.png',
    detalles: [
      {
        titulo: 'Barbero y cliente',
        data: 'BARBERAPP nos da brinda la posibilidad de que tanto clientes como barberos tengan una cuenta. Un cliente podrá agendar citas con el barbero de su preferencia y por otro lado el barbero en su cuenta de BARBBERAPP podrá ver estas citas agendadas y decidir si aceptarlas o rechazarlas.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015171/portafolio/barberapp/64f2c810-73b7-4dfd-9c12-07d35d36e862_txgsvq.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646153693/portafolio/barberapp/menu-user-desk_jtgfwl.png',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015130/portafolio/barberapp/43985bb6-9674-48b4-9c1a-53ac5c329fbc_lstegh.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646153692/portafolio/barberapp/menu-barber-desk_p0d8gq.png'
        ]
      },
      {
        titulo: 'Login y Registro del barbero',
        data: 'El barbero podrá ingresar a su cuenta normalmente, solo debe cambiar la opción a modo barbero. Pero para registrar un barbero debe hacerlo un administrador de la página que cuente con la contraseña de "administrador" que es requerida para crear un user de barbero.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646153268/portafolio/barberapp/d2134e1a-b32e-4874-9ed9-3100704bd5f2_x39y1s.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646153148/portafolio/barberapp/registraradmin-desk_mzkcy4.png',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646153264/portafolio/barberapp/79bf791f-0f1c-4f7d-9e3c-15e3fdd527e3_jwoh5m.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646153147/portafolio/barberapp/registrobarbero-desk_htsmwn.png'
        ]
      },
      {
        titulo: 'Login y Registro del cliente',
        data: 'El cliente debe de crearse una cuenta para poder contar con los servicios de BARBERAPP, para esto se le brinda la posibilidad de hacerlo con un correo electrónico.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015192/portafolio/barberapp/90e0239c-e961-484e-b4ef-042d741e72e9_m7udyu.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1644874961/portafolio/barberapp/barberapp_sdpgwl.png'
        ]
      },
      {
        titulo: 'Agendar cita',
        data: 'El cliente tiene la posibilidad de agendar citas con el barbero que él prefiere y puede hacerlo de 2 formas, la primera es entrando a la página "agendar cita" y la otra es entrando en la página de "barbero" en donde podrá elegir a su barbero y agendar la cita directamente.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015165/portafolio/barberapp/e78ae585-a9d8-4e98-955d-85fc502cee0d_ubuoje.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646100418/portafolio/barberapp/agendar-barberapp-desk_oc67ox.png'
        ]
      },
      {
        titulo: 'Ver citas',
        data: 'El cliente tiene la posibilidad de ver las citas que tiene agendadas y también ver en qué estado de encuentran, podrá ver si la cita fue aceptada, rechazada o caduco. Por otro lado, el barbero tiene la posibilidad de ver las citas que le han solicitado y decidir si aceptarlas o rechazarlas.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015153/portafolio/barberapp/c05b9c5d-e36c-4ab6-bfa6-e1881bbef6cc_rtxtto.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646100548/portafolio/barberapp/citas-barberapp-desk_fiskup.png'
        ]
      },
      {
        titulo: 'Ver barberos',
        data: 'Solo el cliente tiene la posibilidad de ver los barberos disponibles y ver su foto o ir a su perfil y una breve descripción de ellos, con esto el cliente podrá decidir con más seguridad con quien quiere agendar si cita.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015160/portafolio/barberapp/1453c605-7799-45a1-bdb3-7db906ec2440_pwnnhw.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646100662/portafolio/barberapp/barberos-barberapp-desk_tqbcqo.png',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646100753/portafolio/barberapp/Image_4_pqyacf.png'
        ]
      },
      {
        titulo: 'Perfil de barbero',
        data: 'Solo los barberos cuentan con un perfil en el que pueden hablar de ellos y de su experiencia, además tienen la posibilidad de agregar fotos de los cortes que han realizado para que el cliente pueda ver su trabajo.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015113/portafolio/barberapp/a10fa6e2-39da-455d-81d0-11f4d5ca4cfc_ouzbkh.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/c_scale,h_1079/v1646097636/portafolio/barberapp/637b8db2-1301-4f12-bb8c-177005cb2c48_sy9vix.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015074/portafolio/barberapp/879b6616-b450-43ff-8f5f-e11607ec392f_uhussk.jpg'
        ]
      }
    ]
  },
  {
    titulo: 'NETBOOK',
    descripcion:
      'Mini clon de una red social realizado con React, Redux y firebase, me baso en ciertas funcionalidades de Facebook, tales como, publicaciones, likes, comentarios y perfiles individuales.',
    tecnologias: ['React', 'Firebase', 'Redux', 'Sass'],
    url: 'https://agnetbook.netlify.app/',
    codigo: 'https://github.com/GamaDev-Andres/network-social-react',
    poster:
      'https://res.cloudinary.com/dapa84kxy/image/upload/v1644874998/portafolio/netbook/netbook_gus84s.png',
    detalles: [
      {
        titulo: 'Login y Registro',
        data: 'El usuario debe crear una cuenta para poder ver el contenido principal de Netbook. Esta cuenta puede ser creada por email o Google y si lo hace con Google se tomará su foto de perfil como la de Netbook.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015471/portafolio/netbook/cfb26212-3d77-46aa-9094-a9266e1eb35f_iqmfpo.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015547/portafolio/netbook/24370910-6487-475f-803c-3e9d3c81f2e6_bpkyje.jpg'
        ]
      },
      {
        titulo: 'Agregar amigos',
        data: 'El usuario podrá agregar amigos para así poder seguir sus publicaciones y también tiene la posibilidad de eliminar amigos.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015491/portafolio/netbook/82cb277a-9686-45c5-aaea-878f31e22fb2_f2tvwk.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646156160/portafolio/netbook/buscaramigo-netbool_m3ajvq.png'
        ]
      },
      {
        titulo: 'CRUD publicacion',
        data: 'El usuario tiene la posibilidad de crear publicaciones las cuales pueden ver cualquier usuario de Netbook y les da la posibilidad de comentar o reaccionar a estas. También podrá eliminar la publicación o editarla, pero solo si él fue el creador.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015511/portafolio/netbook/df194257-90a8-4f03-afcb-ccb2baa2bac7_drskej.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646156249/portafolio/netbook/publicar-desk_y49ifp.png',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646156337/portafolio/netbook/edit-post_fry5df.png',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015503/portafolio/netbook/08d13c32-4507-4f50-b8a5-f2caef557a80_qsd2qs.jpg'
        ]
      },
      {
        titulo: 'Comentar publicacion',
        data: 'Un usuario tiene la posibilidad de crear uno o más comentarios en las publicaciones, los caracteres son limitados más los comentarios no, se cuenta con la posibilidad de eliminar el comentario.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015497/portafolio/netbook/4b9e0f87-b65e-4b96-8b35-e0def5410cc9_aidfgh.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646156459/portafolio/netbook/coments-desk_xl1s3l.png'
        ]
      },
      {
        titulo: 'Reaccionar a publicacion',
        data: 'El usuario puede darle "Me gusta" a las publicaciones y también podrá ver las personas que han reaccionado a las publicaciones.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646156708/portafolio/netbook/reacciones_tpa2bh.png',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646156709/portafolio/netbook/listreacciones_gl92lw.png'
        ]
      },
      {
        titulo: 'Perfil del usuario',
        data: 'Cada usuario cuenta con un perfil en el cual podrá ver sus publicaciones, amigos y podrá editar sus detalles de perfil. También se cuenta con la posibilidad de ver el perfil de otros usuarios.',
        fotos: [
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646016701/portafolio/netbook/perfil-netbook-desk_ouzk99.png',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646016692/portafolio/netbook/perfil-netbook-desk2_zazvhd.png',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015538/portafolio/netbook/ef871a8e-5a00-4a8d-8ca3-91dc1edb6dab_ehmtvq.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015481/portafolio/netbook/36ec0bc2-64b9-48e1-b765-1815a596c60e_prrgej.jpg',
          'https://res.cloudinary.com/dapa84kxy/image/upload/v1646015543/portafolio/netbook/3a261fab-f547-4d9e-968b-e36c41b2b495_xfysck.jpg'
        ]
      }
    ]
  },
  {
    titulo: 'GALERIA',
    descripcion:
      'Simulación de una galería web realizada con React y Firebase , la aplicación se basa en la posibilidad de crear álbumes y tomarse fotos directamente en el álbum deseado y también tiene la posibilidad de buscar imágenes en una API y guardarlas en un álbum.',
    tecnologias: ['React', 'Firebase', 'StyledComponents'],
    url: 'https://practica-galeria.web.app/',
    codigo: 'https://github.com/GamaDev-Andres/react-galeria',
    poster:
      'https://res.cloudinary.com/dapa84kxy/image/upload/v1644875042/portafolio/galeriareact/reactFirebase_xjiauw.png',
    fotos: []
  },
  {
    titulo: 'MIS PELIS',
    descripcion:
      'Proyecto de películas hecho con Javascript, Sass y webpack .En este proyecto me baso en un diseño de una pagina funcional, consulto la API IMDB que me provee información tanto de series como de películas con sus respectivos tráileres y sinopsis. Implemento buscadores y lista de favoritos.',
    tecnologias: ['Html', 'Sass', 'Webpack', 'Javascript'],
    url: 'https://afmispelisgi.netlify.app/',
    codigo: 'https://github.com/GamaDev-Andres/PeliculasOMDB',
    poster:
      'https://res.cloudinary.com/dapa84kxy/image/upload/v1644875064/portafolio/mispelis/imagepelisOMDB_cchblf.png',
    fotos: []
  }
  // {
  //   titulo: 'FINDYOURGAMES',
  //   descripcion:
  //     'Proyecto realizado con Html, css, javascript y gulp. En este proyecto consulto una API de videojuegos y organizo su información en una interfaz que me permite hacer búsqueda y filtrado de los videojuegos disponibles.',
  //   tecnologias: ['Html', 'Sass', 'Gulp', 'Javascript'],
  //   url: 'https://findyourgames.netlify.app/',
  //   codigo: 'https://github.com/GamaDev-Andres/FindYourGames',
  //   poster:
  //     'https://res.cloudinary.com/dapa84kxy/image/upload/v1644875081/portafolio/findyourgames/proyecto1_vsncjy.png',
  //   fotos: []
  // }
]

const miDescripcionForTest = {
  quienSoy: {
    parrafo1: `Mi nombre es Andres Gama, me apasiona encontrar grandes retos que me
          permitan crecer profesional y personalmente, la programación me
          permite enfocarme en esto.Actualmente tengo 22 años y sé que lograre
          que mis conocimientos sean participes de grandes, útiles y reconocidos
          proyectos.`,
    parrafo2: `En mí podras ver a un chico ansioso por aprender y dispuesto a
          afrontar complejas curvas de aprendizaje y gracias a mi constancia y
          disciplina veras a alguien creciendo constantemente.`
  },
  proceso: {
    parrafo1: `Inicie con pequeños cursos y blogs de programación en YouTube,
            posteriormente me di cuenta de que este mundo de verdad me
            interesaba y a pesar de que lo miraba complicado ... debía
            intentarlo entonces me aventuré a profundizar y empecé a conocer
            plataformas como Udemy, Platzi, MDN, etc...`,
    parrafo2: `He tenido diferentes dificultades en mi proceso, tanto para aprender
            como para aplicar lo aprendido, entre estas dificultades se destaca
            el hecho de enfrentarme a retos desconocidos como pueden ser
            tecnologias nuevas o profundizar más una tecnología para obtener el
            resultado deseado o uno más optimo, al final entendí que lo más
            lindo de esta profesión es que se garantiza un crecimiento
            constante.`
  },
  presentacion:
    'apasionado por el mundo del desarrollo y por crear aplicaciones e interfaces que aporten y brinden grandes experiencias.'
}

describe('probando data', () => {
  test('debe ser la misma data de "proyectos"', () => {
    expect(proyectos).toEqual(proyectosForTest)
  })
  test('debe ser la misma data de "miDescripcion"', () => {
    expect(miDescripcion).toEqual(miDescripcionForTest)
  })
})

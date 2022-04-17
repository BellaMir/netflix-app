import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  navArray = [{
   name: "Inicio",
   link: "/"
  },
  {
    name: "Buscar",
    link: "/"
   }

  ]

  heroGallery = [{
      name: "1",
      photo: "../assets/images/Top10/1-papel.webp"
    },
    {
      name: "2",
      photo: "../assets/images/Top10/10-gooddoctor.webp"
    },
    {
      name: "3",
      photo: "../assets/images/Top10/2-reina.webp"
    },
    {
      name: "4",
      photo: "../assets/images/Top10/3-titanes.webp"
    }]

    terrorGallery = {

    section: "Terror",
    films:[{
      title: "",
      photo: "../assets/images/Terror/apostol.jpg"
    },
    {
      title: "",
      photo: "../assets/images/Terror/calleterror.jpg"
    },
    {
      title: "",
      photo: "../assets/images/Terror/life.webp"
    },
    {
      title: "",
      photo: "../assets/images/Terror/insidious2.webp"
    },
    {
      title: "",
      photo: "../assets/images/Terror/malasana.webp"
    },
    {
      title: "",
      photo: "../assets/images/Terror/reflejos.webp"
    },
   ]
  }


    comedyGallery = {
    section: "Comedia",
    films:[

    {
      title: "",
      photo: "../assets/images/Comedia/casi300.webp"
    },
    {
      title: "",
      photo: "../assets/images/Comedia/cazafantasmas.webp"
    },
    {
      title: "",
      photo: "../assets/images/Comedia/dictador.webp"
    },
    {
      title: "",
      photo: "../assets/images/Comedia/erasehollywood.webp"
    },
    {
      title: "",
      photo: "../assets/images/Comedia/family guy.webp"
    },
    {
      title: "",
      photo: "../assets/images/Comedia/rickandmorty.webp"
    },
    ]
  }
  accionGallery = {

    section: "Acción",
    films:[{
      title: "",
      photo: "../assets/images/Accion/ejercitomuertos.jpg"
    },
    {
      title: "",
      photo: "../assets/images/Accion/elprotector.webp"
    },
    {
      title: "",
      photo: "../assets/images/Accion/equalizer2.webp"
    },
    {
      title: "",
      photo: "../assets/images/Accion/heat.webp"
    },
    {
      title: "",
      photo: "../assets/images/Accion/jackreacher.webp"
    },
    {
      title: "",
      photo: "../assets/images/Accion/johnwick2.webp"
    },
   ]
  }


    animeGallery = {
    section: "Anime",
    films:[

    {
      title: "",
      photo: "../assets/images/Anime/ajin.jpg"
    },
    {
      title: "",
      photo: "../assets/images/Anime/castilloambulante.webp"
    },
    {
      title: "",
      photo: "../assets/images/Anime/chihiro.webp"
    },
    {
      title: "",
      photo: "../assets/images/Anime/evangelion.webp"
    },
    {
      title: "",
      photo: "../assets/images/Anime/gitsarise.webp"
    },
    {
      title: "",
      photo: "../assets/images/Anime/gundam.webp"
    },
    ]
  }
  dramaGallery = {

    section: "Drama",
    films:[{
      title: "",
      photo: "../assets/images/Drama/1917.webp"
    },
    {
      title: "",
      photo: "../assets/images/Drama/arrival.webp"
    },
    {
      title: "",
      photo: "../assets/images/Drama/corazones.webp"
    },
    {
      title: "",
      photo: "../assets/images/Drama/clublucha.webp"
    },
    {
      title: "",
      photo: "../assets/images/Drama/millaverde.webp"
    },
    {
      title: "",
      photo: "../assets/images/Drama/salvaralsoldado.webp"
    },
   ]
  }


    scifiGallery = {
    section: "Sci-fi",
    films:[

    {
      title: "",
      photo: "../assets/images/Sci-fi/12monos.webp"
    },
    {
      title: "",
      photo: "../assets/images/Sci-fi/deepimpact.webp"
    },
    {
      title: "",
      photo: "../assets/images/Sci-fi/6dia.webp"
    },
    {
      title: "",
      photo: "../assets/images/Sci-fi/doom.webp"
    },
    {
      title: "",
      photo: "../assets/images/Sci-fi/colverparadox.jpg"
    },
    {
      title: "",
      photo: "../assets/images/Sci-fi/jumper.webp"
    },
    ]
  }
 public isDark: boolean = false;

 public changeTem = () => {

   if (this.isDark == true){
     this.isDark = false;
   }else if (this.isDark==false){
     this.isDark = true;
   }

 }

}




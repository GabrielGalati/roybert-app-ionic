import { Component, OnInit } from '@angular/core';


import { Routes, RouterModule, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.page.html',
  styleUrls: ['./ejercicio7.page.scss'],
})
export class Ejercicio7Page  {
    
  readonly LETRAS = [
    "P", "E", "G", "A", 
    
   "L","O"];

readonly PALABRAS = ["PLA"];

botones: Array<{ letra: string, estado: string }>;

palabraAdivinadaPorAhora: string;
palabraAAdivinar: string;
fallos: Array<string>;
numFallos: number;
numAciertos: number;
//public navCtrl: NavController, public alertCtrl: AlertController
constructor(public alertController: AlertController, private router:Router) {
    this.inicializar();
}

inicializar(): void {
    
    this.numFallos = 0;
    this.numAciertos = 0;
    this.fallos = [];
    this.botones = [];
    let numero = Math.floor(Math.random() * this.PALABRAS.length);
    this.palabraAAdivinar = this.PALABRAS[numero];

    this.generarPalabraAdivinadaPorAhora();
    this.inicializarBotones();
}

inicializarBotones(): void {
    for (let i = 0; i < this.LETRAS.length; i++) {
        this.botones.push({ letra: this.LETRAS[i], estado: "boton-no-pulsado-aun" });
    }
}

generarPalabraAdivinadaPorAhora(): void {

    this.palabraAdivinadaPorAhora = "";
    for (let i = 0; i < this.palabraAAdivinar.length; i++) {
        this.palabraAdivinadaPorAhora += "-";
    }
}

botonClicked(boton: { letra: string, estado: string}): void {

    if (!this.letraAcertada(boton.letra)) {
        if (this.numFallos < 1) {
            this.aumentarFallos(boton.letra);
        } else {
            this.mostrarMensajeDePerder();
        }
        boton.estado = "boton-letra-no-acertada";
    } else {
        if (this.numAciertos == this.palabraAAdivinar.length) {
            this.mostrarMensajeDeGanar();
        }
        boton.estado = "boton-letra-acertada";
    }
}

letraAcertada(letra: string): boolean {

    let letraAcertada = false;
    let longitud = this.palabraAAdivinar.length;

    for (let i = 0; i < longitud; i++) {
        if (letra == this.palabraAAdivinar[i]) {
            this.palabraAdivinadaPorAhora =
                (i == 0 ? "" : this.palabraAdivinadaPorAhora.substr(0, i)) +
                letra +
                this.palabraAdivinadaPorAhora.substr(i + 1);
            letraAcertada = true;
            this.numAciertos++;
        }
    }
    return letraAcertada;
}

aumentarFallos(letra: string): void {
    this.fallos.push(letra);
    this.numFallos++;
}


async mostrarMensajeDePerder() {
    const alert = await this.alertController.create({
      header: 'Ha Perdido',
      subHeader: 'D:',
      message: '¡Lo siento! Pulse Ok para jugar otra vez.',
      buttons: ['OK']
    });
    this.inicializar();
    await alert.present();
  }


async mostrarMensajeDeGanar() {
    const alert = await this.alertController.create({
      header: 'Ha Ganado',
      subHeader: ':D',
      message: '¡Felicidades! Pulse Ok para jugar otra vez.',
      buttons: ['OK']
   
      
    });
    this.router.navigate(['/tabs/tab2']);
    this.inicializar();
    await alert.present();
  }
}


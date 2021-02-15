import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  position = 1;
  ocultarBg = false;
  textPosition = 0;

  constructor() {}

  ngOnInit() {
    document.addEventListener('keyup', (e)=> {
      if (e.key == 'ArrowLeft') {
        this.cambiarPosition(-1)
      }
      else if (e.key == 'ArrowRight') {
        this.cambiarPosition(1)
      }    
    })

    setInterval(() => {
      if(this.textPosition === 3) this.textPosition = 1
      else ++this.textPosition
    }, 3000)
  }

  cambiarPosition(i: number) {
    this.ocultarBg = true;
    if ( this.position + i === 8 ) {
      this.position = 1
      return
    }
    if (this.position + i === 0) return 

    this.position += i

  }

}

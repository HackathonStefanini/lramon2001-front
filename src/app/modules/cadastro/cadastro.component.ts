import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.cadastroForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('',  [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ])
    });
  }

  onSubmit() {
    console.log('teste')
    if (this.cadastroForm.valid) {
      console.log('Formulário válido');
      // this.router.navigate("/stefamon");
    } else {
      console.log('Formulário inválido');
    }
  }

}

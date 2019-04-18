import { Component,OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  angForm: FormGroup;
 constructor(private fb : FormBuilder)
 {}
  ngOnInit(){
   
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email:['',[Validators.email, Validators.required]],
      city:['',Validators.required],
      date:['',Validators.required],
      address:['',Validators.required],
      check:[true]
       });
   
  console.log('on change event');

  this.subscribeFormControl();
 }

 subscribeFormControl(){
  const address = this.angForm.get('address');
  this.angForm.get('check').valueChanges.subscribe(
    (mode:boolean)=>{
     console.log(mode);
     if(mode)
     {
       address.setValidators(Validators.required);
     }
     else{
      address.setErrors(null)
      address.clearValidators();
       console.log('in else');
     }
   
     this.angForm.updateValueAndValidity();
   
   });
 }


 }



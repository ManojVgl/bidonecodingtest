import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileForm= this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required]
  });
  submitted = false;
  message='';
  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
  ) {};
  createProfile(data:any): void {
    this.message = '';

    this.profileService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This profile has been added successfully!';
        },
        error: (e) => console.error(e)
      });
     
  }
  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }
  clear(): void {
    // Process checkout data here
    this.submitted=false;
    // stop here if form is invalid
 
  }
  onSubmit(): void {
    // Process checkout data here
    this.submitted=true;
    // stop here if form is invalid
    if (this.profileForm.invalid) {
      this.submitted=false;
      return;
  }

    this.createProfile(this.profileForm.value);
    console.warn('Your profile has been submitted' , this.profileForm.value);
    this.profileForm.reset();
    
  }
}

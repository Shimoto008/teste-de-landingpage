import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';

type btnVariants = "primary" | "secondary"

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Input("btn-text") bntText: string = "";
  @Input() disabled: boolean = false
  @Input() loading: boolean = false
  @Input() variant: btnVariants = "primary"
  @Output("Submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

}

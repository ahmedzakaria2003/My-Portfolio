import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
  color: string;
}

interface SocialLink {
  icon: string;
  name: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  contactInfo: ContactInfo[] = [
    {
      icon: 'mail',
      title: 'Email',
      value: 'ahmedmohamedzakaria423@gmail.com',
      link: 'mailto:ahmedmohamedzakaria423@gmail.com',
      color: 'blue'
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+201011869193',
      link: 'tel:+201011869193',
      color: 'emerald'
    },
    {
      icon: 'map-pin',
      title: 'Location',
      value: 'Cairo, Egypt',
      link: '#',
      color: 'orange'
    }
  ];

  socialLinks: SocialLink[] = [
    {
      icon: 'github',
      name: 'GitHub',
      url: 'https://github.com/ahmedzakaria2003',
      color: 'gray'
    },
    {
      icon: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ahmed-zakaria-454aa8319',
      color: 'blue'
    },
    {
      icon: 'message-circle',
      name: 'WhatsApp',
      url: 'https://wa.me/201011869193',
      color: 'green'
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        reply_to: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };

      emailjs.send(
        'service_sl5gh1g',
        'template_sgrvghp',
        templateParams,
        'ehB_nRjNMkg89eJpK'
      )
      .then(() => {
        this.successMessage = '✅ Your message has been sent successfully!';
        this.errorMessage = '';
        this.contactForm.reset();

        setTimeout(() => this.successMessage = '', 5000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        this.errorMessage = '❌ Failed to send message. Please try again later.';
        this.successMessage = '';

        setTimeout(() => this.errorMessage = '', 5000);
      });
    }
  }

  getColorClasses(color: string): string {
    const colors: { [key: string]: string } = {
      blue: 'border-blue-400 bg-blue-500 text-blue-400',
      emerald: 'border-emerald-400 bg-emerald-500 text-emerald-400',
      orange: 'border-orange-400 bg-orange-500 text-orange-400',
      gray: 'border-gray-400 bg-gray-500 text-gray-400',
      green: 'border-green-400 bg-green-500 text-green-400'
    };
    return colors[color] || colors['blue'];
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Menu, X, Github, Linkedin, Mail, ArrowDown, Download, 
         GraduationCap, Code, Award, MapPin, Database, Cloud, Shield, GitBranch, 
         Layers, ExternalLink, ShoppingCart, Gavel, Send, Phone, MessageCircle, Heart } from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({
      Menu, X, Github, Linkedin, Mail, ArrowDown, Download, GraduationCap, 
      Code, Award, MapPin, Database, Cloud, Shield, GitBranch, Layers, 
      ExternalLink, ShoppingCart, Gavel, Send, Phone, MessageCircle, Heart
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
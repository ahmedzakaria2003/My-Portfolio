import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LucideAngularModule, Menu, X, Github, Linkedin, Mail, ArrowDown, ArrowUp, Download, 
         GraduationCap, Code, Award, MapPin, Database, Cloud, Shield, GitBranch, 
         Layers, ExternalLink, ShoppingCart, Gavel, Send, Phone, MessageCircle, Heart, Activity,
         BookOpen, CheckCircle2, Star, Sparkles, Clock, Users, Check, PhoneCall, HelpCircle, PenTool, CheckSquare } from 'lucide-angular';

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
    FormsModule,
    LucideAngularModule.pick({
      Menu, X, Github, Linkedin, Mail, ArrowDown, ArrowUp, Download, GraduationCap, 
      Code, Award, MapPin, Database, Cloud, Shield, GitBranch, Layers, 
      ExternalLink, ShoppingCart, Gavel, Send, Phone, MessageCircle, Heart, Activity,
      BookOpen, CheckCircle2, Star, Sparkles, Clock, Users, Check, PhoneCall, HelpCircle, PenTool, CheckSquare
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
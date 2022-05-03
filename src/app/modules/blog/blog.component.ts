import { Component, OnInit } from '@angular/core';
import {ISection} from "../../core/interfaces/section.interface";
import {BlogService} from "../../core/services/blog/blog.service";
import {BlogSection} from "../../core/models/blogSection.model";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title: string = "Blog"
  sections: ISection[] = []

  constructor(
    private blogService:BlogService
  ) { }

  ngOnInit(): void {
    this.loadSections()
  }

  loadSections() {
    this.blogService.getSections().subscribe(
      (data) => {
        data.forEach((section) => {
          const addSection: ISection = new BlogSection(
            section.title, section.description, section.date, section.image
          )
          this.sections.push(addSection);
        })
      }
    )
  }
}

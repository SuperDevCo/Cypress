import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import {coursePage} from "@pages/coursePage"


When( "the user fills a course creation form", () => {
    coursePage.addCourse

});

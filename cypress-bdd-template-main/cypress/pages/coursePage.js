class coursePage{
    elements = {
        addCourseBtn: () => cy.contains('Add Course')

    };

   addCourse(){
        this.elements.addCourseBtn().click();
    }
};

export const coursePage = new coursePage();
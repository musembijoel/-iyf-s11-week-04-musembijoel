const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name.toLowerCase() === name.toLowerCase()) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return 0;
        
        const gradesArray = Object.values(student.grades);
        if (gradesArray.length === 0) return 0;
        
        const total = gradesArray.reduce((sum, current) => sum + current, 0);
        return parseFloat((total / gradesArray.length).toFixed(2));
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        let totalScore = 0;
        let count = 0;
        
        this.students.forEach(student => {
            if (student.grades[subject] !== undefined) {
                totalScore += student.grades[subject];
                count++;
            }
        });
        
        return count === 0 ? 0 : parseFloat((totalScore / count).toFixed(2));
    },
    
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;
        
        return this.students.reduce((top, current) => {
            const topAvg = this.getStudentAverage(top.name);
            const currentAvg = this.getStudentAverage(current.name);
            return currentAvg > topAvg ? current : top;
        });
    },
    
    // Get students needing help (average less than 70)
    getStrugglingStudents() {
        return this.students.filter(student => this.getStudentAverage(student.name) < 70);
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `Student "${name}" not found.`;
        
        const overallAverage = this.getStudentAverage(name);
        
        let report = `==============================\n`;
        report += `    REPORT CARD: ${student.name.toUpperCase()}\n`;
        report += `==============================\n`;
        
        // Loop through each subject and score
        for (const [subject, score] of Object.entries(student.grades)) {
            const letter = this.getLetterGrade(score);
            // Pads the subject name string so the grades line up neatly
            const paddedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
            report += `${paddedSubject.padEnd(12)}: ${score} (${letter})\n`;
        }
        
        report += `------------------------------\n`;
        report += `Overall Average: ${overallAverage} (${this.getLetterGrade(overallAverage)})\n`;
        report += `==============================`;
        
        return report;
    }
};

// --- Test Implementation ---

gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("Alice's Average:", gradeTracker.getStudentAverage("Alice"));      
// Output: 91.67

console.log("Math Class Average:", gradeTracker.getSubjectAverage("math"));       
// Output: 75.67

console.log("Top Performer:", gradeTracker.getTopStudent().name);                 
// Output: Alice

console.log("Struggling Students:", gradeTracker.getStrugglingStudents().map(s => s.name));         
// Output: ['Charlie']

console.log("\n" + gradeTracker.generateReportCard("Alice"));

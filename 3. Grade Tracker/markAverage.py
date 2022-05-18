from tkinter import *
import json
average = "Avg:  "
numberOfGrades = 0
Grade = 0
GradeList = []

try:
    with open('Grades.json') as Cjson:
        GradeList = json.load(open('Grades.json'))
except:
    jsonDump = json.dumps(GradeList)

    with open('Grades.json', 'w') as Cjson:
        Cjson.write(jsonDump)

try:
    sumOfGrades = 0
    for i in GradeList:
        sumOfGrades += i["Grade"]
    average = "Avg: " + str(round(sumOfGrades/len(GradeList), 1)) + "%"
except:
    pass


class GradeClass:
    def __init__(self, subject, Grade, per):
        self.Grade = round(Grade * (100/per))
        self.GradeDict = {"Subject": subject, "Grade": self.Grade}
        GradeList.append(self.GradeDict)

        jsonDump = json.dumps(GradeList)

        with open('Grades.json', 'w') as Cjson:
            Cjson.write(jsonDump)


def getAverage():
    try:
        sumOfGrades = 0
        for i in GradeList:
            sumOfGrades += i["Grade"]
        average = "Avg: " + str(round(sumOfGrades/len(GradeList), 1)) + "%"
        averageLabel.config(text=average)
    except:
        pass


def Add():
    addAClass = GradeClass(subject.get(), int(Grade.get()), int(percent.get()))
    getAverage()


def view():
    root2 = Tk()
    root2.title('View')
    root2.config(bg='gray30')
    scrollbar = Scrollbar(root2)
    scrollbar.pack(side=RIGHT, fill=Y)
    viewSpace = Listbox(root2, font=('Roboto', 18), bg='grey25',
                        fg='gray80', width=50, yscrollcommand=scrollbar.set)
    viewSpace.pack()
    for i in GradeList:
        viewSpace.insert(END, str(i["Grade"]) + ":   " + str(i["Subject"]))

    root2.mainloop()


root = Tk()
root.config(bg="gray30")
root.title("Average Grades")


buttonFrame = Frame(root)
buttonFrame.grid(column=0, row=3, pady=(0, 10))

subjectLabel = Label(root, font=('Roboto Light', 18),
                     text="Subject -->", bg="gray20", fg="gray90")
subjectLabel.grid(column=0, row=0, padx=10)
subject = Entry(root, bg="gray15", font=('Roboto Light', 18), fg="gray90")
subject.grid(column=1, row=0, pady=10, padx=10)

GradeLabel = Label(root, font=('Roboto Light', 14),
                   text="Grade:", bg="gray20", fg="gray90")
GradeLabel.grid(column=0, row=1, padx=10)
Grade = Entry(root, bg="gray15", font=('Roboto Light', 18), fg="gray90")
Grade.grid(column=0, row=2, pady=10, padx=10)

percentLabel = Label(root, font=('Roboto Light', 14),
                     text="Percent:", bg="gray20", fg="gray90")
percentLabel.grid(column=1, row=1, padx=10)
percent = Entry(root, bg="grey15", font=('Roboto Light', 18), fg="gray90")
percent.grid(column=1, row=2, pady=10, padx=10)


addButton = Button(buttonFrame, bg="grey15", font=(
    'Roboto Light', 14), fg="gray90", text="ADD", command=Add)
addButton.grid(column=0, row=0)

viewButton = Button(buttonFrame, bg="grey15", font=(
    'Roboto Light', 14), fg="gray90", text="VIEW", command=view)
viewButton.grid(column=1, row=0)

averageLabel = Label(root, bg="grey15", font=(
    'Roboto Light', 18), fg="gray90", text=average)
averageLabel.grid(column=1, row=3, pady=(0, 10))


root.mainloop()

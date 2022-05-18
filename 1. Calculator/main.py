from tkinter import *
from functools import partial
from math import cos, tan, sin, sqrt
from math import radians as deg
global equation, equation
root = Tk()
root.title("Calculator")

symbols = ["+", "C", "(", ")", "^", "7", "8", "9", "/",
           "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"]
equationString = ""
equation = ""

buttonFSize = 25
buttonColor = 'grey10'
buttonFColor = 'white'
rob = 'Roboto'


def add(symbol):
    global equationString, equation
    if symbol == "=":
        equation = str(eval(equation))
        equationString = equation
    elif symbol == "C":
        equation = ""
        equationString = ""
    elif symbol == "^":
        equation += "**"
        equationString += "^"
    else:
        equation += symbol
        equationString += symbol
    screen.config(text=equationString)
    root.update()


buttonFrame = Frame(root, bg="gray20")
screen = Label(buttonFrame, anchor="w", bg="gray30", fg="gray90",
               font=('roboto', 26), width=11, text=equationString)
screen.grid(row=0, column=0, columnspan=4, sticky="we")

counter = 0
for i in range(1, int(len(symbols)/4)+1):
    for a in range(4):
        func = partial(add, symbols[counter])
        Button(buttonFrame, text=symbols[counter], command=func, bg=buttonColor, font=(
            rob, buttonFSize), borderwidth=0, fg=buttonFColor).grid(padx=1, pady=1, row=i, column=a, sticky="ew")
        counter += 1


root.config(bg="gray20")
buttonFrame.pack()
root.mainloop()

import time
import random
import os


def start():
    os.system('cls' if os.name is 'nt' else 'clear')
    x = input("Enter your password (only numbers): ")
    main(x)


def main(code: int):
    input("Press enter to start cracking your password")
    if len(code) < 5:
        os.system('cls' if os.name is 'nt' else 'clear')
        print(
            f"Going through all numbers between 0 and {10**len(code)-1} to crack your Pin...")
        time.sleep(3)
        attempts = 0
        start = time.time()
        for i in range(0, (10**len(code)) - 1):
            varCode = '0'*(len(code) - len(str(i))) + str(i)
            if varCode == code:
                print("\n\nYour PIN is: " + varCode + "\nSolved in: " +
                      str(time.time() - start) + " seconds")
                break
            else:
                attempts += 1
                print("Tried PIN: " + varCode +
                      "       Attempt: " + str(attempts))

    else:
        os.system('cls' if os.name is 'nt' else 'clear')
        print("Randomly guessing your PIN...")
        time.sleep(3)
        codeList = []
        varCode = ''
        attempts = 0
        start = time.time()
        while True:
            varCode = ''
            for i in range(0, len(code)):
                varCode += str(round(random.uniform(0, 9)))
            codeList.append(varCode)
            if varCode == code:
                print("\n\nYour PIN is: " + varCode + "\nSolved in: " +
                      str(time.time() - start) + " seconds")
                break
            else:
                attempts += 1
                print("Tried PIN: " + varCode +
                      "       Attempt: " + str(attempts))
    input('Press enter to go back')


while True:
    start()

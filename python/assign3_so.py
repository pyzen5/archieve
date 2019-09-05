# 1

import random
quizStart = 'C'
while quizStart == 'C':
    diff = raw_input('Choose level (easy, intermediate, and hard):')
    totalQ = int(input('Please give us the number of question you want to attempt: '))
    queCounter = 0
    quetype = raw_input('Specify the question type (multiplication:M, addition:A, subtraction:S, division:D):')
    succ_op = "That's right -- well done"
    err_op = "Wrong answer!!"
    while queCounter<totalQ:
        if quetype == 'M':
            quePartA = random.randint(0, 9)
            quePartB = random.randint(0, 9)
            ansCapture = int(input("What's "+str(quePartA)+" multiplied by "+str(quePartB)+"?"))
            if ansCapture == quePartA * quePartB:
                print succ_op
            else:
                print err_op
        elif quetype == 'A':
            quePartA = random.randint(0, 9)
            quePartB = random.randint(0, 9)
            ansCapture = int(input("What's "+str(quePartA)+" plus "+str(quePartB)+"?"))
            if ansCapture == quePartA + quePartB:
                print succ_op
            else:
                print err_op
        elif quetype == 'S':
            quePartA = random.randint(0, 9)
            quePartB = random.randint(0, 9)
            ansCapture = int(input("What's "+str(quePartA)+" minus "+str(quePartB)+"?"))
            if ansCapture == quePartA - quePartB:
                print succ_op
            else:
                print err_op
        elif quetype == 'D':
            quePartA = random.randint(0, 9)
            quePartB = random.randint(0, 9)
            ansCapture = int(input("What's "+str(quePartA)+" divided by "+str(quePartB)+"?"))
            if ansCapture == quePartA / quePartB:
                print succ_op
            else:
                print err_op
        else:
            pass
        queCounter = queCounter+1
    quizend = raw_input('Continue or exit (Continue:C, Exit: E):')
    quizStart = quizend

# 2

def power(x, y):
    if y == 1:
        return x
    if y != 1:
        return x * power(x, y - 1)

print power(2,3)


# 3
mylist = [["john", 1, "a"], ["larry", 0, "b"]]
mylist.sort(key=lambda x: x[1])
print mylist

# 4
import operator
mylist = [["john", 1, "a"],["larry", 0, "b"]]
print sorted(mylist, key = operator.itemgetter(1))

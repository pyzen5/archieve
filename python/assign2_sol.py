# 1
total = input('What is the total amount for your online shopping?')
country = raw_input('Shipping within the US or Canada?')
if country == "US":
    if total <= 50:
        print "Shipping Costs $6.00"
    elif total <= 100:
        print "Shipping Costs $9.00"
    elif total <= 150:
        print "Shipping Costs $12.00"
    else:
        print "FREE"
if country == "Canada":
    if total <= 50:
        print "Shipping Costs $8.00"
    elif total <= 100:
        print "Shipping Costs $12.00"
    elif total <= 150:
        print "Shipping Costs $15.00"
    else:
        print "FREE"

# 2

name = raw_input('Enter your name?')
print "Hello "+name

# 3
Fahrenheit = int(input("Enter temperature in Fahrenheit: "))

Celsius = (Fahrenheit - 32) * 5.0/9.0
print "Temperature in Celsius: ",Celsius


# 4
hours = input('Enter Hours: ')
rate = input ('Enter Rate: ')
print "Pay: %f"%(hours*rate)


# 5
a = [4,7,3,2,5,9]
for c in a:
    print "Element",c,"position: ",a.index(c)

# 6
from string import ascii_lowercase as al
dic = {x:i for i, x in enumerate(al, 1)}
print dic

# 7
my_map = {'a': 1,'b':2}
inv_map = {v: k for k, v in my_map.iteritems()}
print inv_map

# 8
L = ['a', 'b', 'c', 'd']
ite = enumerate(L)
print dict(ite)
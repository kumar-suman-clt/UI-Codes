try:
    f=open('sign_up.html','r')
    f.read()
    print(f)

except IOError:
    print("Could not able to read")
else:
    print("Success!")
finally:
    print("Thanks for testing")

def fibonacci(n):
    primaryValues = [0,1]
    result = 0
    
    if n == 1:
        print(0)
    elif n >= 2:
        print(0) 
        print(1)   
    
    for value in range(2,n):
        result = primaryValues[0] + primaryValues[1]
        primaryValues[0] = primaryValues[1]
        primaryValues[1] = result
        print(result) 
    
fibonacci(10)    
        
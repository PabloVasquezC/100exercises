letters_numbers_signs = ["a","b","c","d","e","f","f","3","5","$","&","(","?","=","H","Z"]
numbers = [1,2,3,4,5,6,7,22,33,44,55,66,77]

print(f"len() method: {len(numbers)}")
print(f"max() method: {max(letters_numbers_signs)}")
print(f"min() method: {min(numbers)}")
print(f"min() method: {(numbers)}")


#Insertion and remover methods

# Adds an element at the end of the list
numbers.append(88)
print(numbers)

# Returns a copy of the list
numbers_copy = numbers.copy()
print(numbers_copy)

# Adds an element at the specified position
letters_numbers_signs.insert(0, "!")
print(letters_numbers_signs)

# Removes the element at the specified position
letters_numbers_signs.pop(3)
print(letters_numbers_signs)

# Removes all the elements from the list
numbers.clear()
print(numbers)

# Returns the number of elements with the specified value
print(letters_numbers_signs.count("f"))

letters_numbers_signs.extend("7531")
print(letters_numbers_signs)

# Returns the index of the first element with the specified value
print(numbers_copy.index(3))

# Sorts the list
print(letters_numbers_signs.sort())



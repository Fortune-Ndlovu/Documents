""" A Functional Breakfast """

def mix_and_cook():
    print('Mixing the ingredients')
    print('Pouring the mixture into a frying pan')
    print('Cooking the first side')
    print('Flipping it!')
    print('Cooking the other side')

def make_omelette():
    mix_and_cook()
    omelette = 'a tasty omelette'
    return omelette

def make_pancake():
    mix_and_cook()
    pancake = 'a delicious pancake'
    return pancake

make_omelette1 = make_omelette()
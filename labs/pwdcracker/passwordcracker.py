import time
def passwordCracker(password):
  startTime = time.time()
  dictionary = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"," ","!","@","0","1","2","3","4","5","6","7","8","9"]
  letter = []
  pWord = password
  for x in range (0, len(pWord)):
    for y in range (0, len(dictionary)):
      if pWord[x] == dictionary[y]:
        letter.append(dictionary[y])
        print(letter)
      
      else:
        print(letter)
        
  print(letter)
  endTime = time.time()
  elapsedTime = endTime - startTime
  print("It took", elapsedTime, "seconds to crack.")
passwordCracker("hgjfjhfuytkugjytrfkykugytkyt45369879te@!!!!@@@")
def StringReverse(string):
    string = list(string)    
    for i in range(len(string)//2):
        string[i], string[-(i+1)] = string[-(i+1)], string[i]
    return ''.join(string)
    
print(StringReverse('rafaele'))
print(StringReverse('izadora'))
print(StringReverse('daniel'))
print(StringReverse('chocolate'))

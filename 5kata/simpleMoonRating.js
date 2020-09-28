//Note: current solution is incomplete. The function requires <= 64 characters, this solution has 72

moonRating=r=>[0,2,4,6,8].map(i=>r-i>=1.5?'o':r-i>=0.5?'c':'x').join('')
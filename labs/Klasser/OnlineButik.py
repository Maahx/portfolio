class Customer:
  def __init__(self, name, age, customerid) -> None:
    self.name = name
    self.age = age
    self.customerid = customerid
  
  def __str__(self):
    return f"[ID:{self.customerid}]-{self.name} (age{self.age})"

class Ware:
  def __init__(self, ware, wareid, wareprice) -> None:
    self.ware = ware
    self.wareid = wareid
    self.wareprice = wareprice
  def __str__(self) -> str:
     return f"[ID:{self.wareid}]-{self.ware} (${self.wareprice})"

class Order:
  def __init__(self, customer, customerid, ware, wareid, wareprice) -> None:
    self.customer = customer
    self.customerid = customerid
    self.ware = ware
    self.wareid = wareid
    self.wareprice = wareprice
  
  def __str__(self):
    return f"[ID:{self.customerid}]-{self.customer} [ID:{self.wareid}]-{self.ware} (${self.wareprice})"

c1 = Customer("Greg", 21, 1902)

w1 = Ware("BasketBall", 1, 12)

o1 = Order("Jorg", 1092, "FootBall", 2, 14)

print(c1)

print(w1)

print(o1)
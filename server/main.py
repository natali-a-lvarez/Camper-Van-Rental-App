# main routes/endpoints
from flask import request, jsonify
from config import app,db
from models import Van

#GET ALL
@app.route('/vans', methods={"GET"})
def get_vans():
    vans = Van.query.all()
    # converting to json since it is an object
    json_vans = list(map(lambda x: x.to_json(), vans))
    return jsonify({"vans": json_vans})

# GET BY ID
@app.route('/vans/<int:id>', methods={'GET'})
def get_van(id):
    van = Van.query.get(id)

    if not van:
        return jsonify({"message": "Van not found!"}), 404

    return jsonify(van.to_json())

# POST a book
@app.route('/vans', methods={'POST'})
def create_van():
    name = request.json.get("name")
    price = request.json.get("price")
    location = request.json.get("location")
    miles = request.json.get("miles")
    kitchen = request.json.get("kitchen")
    bathroom = request.json.get("bathroom")
    sleeps = request.json.get("sleeps")
    seats = request.json.get("seats")
    water = request.json.get("water")
    length = request.json.get("length")
    imgUrl = request.json.get("imgUrl")
    
    new_van = Van(name=name, price=price, location=location, miles=miles, kitchen=kitchen, bathroom=bathroom, sleeps=sleeps, seats=seats, water=water, length=length,imgUrl=imgUrl)
    try:
        db.session.add(new_van)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400
    
    return jsonify({"message": "Van created!"}), 201

# DELETE book
@app.route('/vans/<int:id>', methods={"DELETE"})
def delete_van(id):
    van = Van.query.get(id)

    if not van:
        return jsonify({"message": "Van not found!"}), 404
    
    db.session.delete(van)
    db.session.commit()
    return jsonify({"message": "Van Deleted!"}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return "Backend is running"

@app.route("/submit", methods=["POST"])
def submit():
    data = request.form.get("name")
    return jsonify({
        "message": f"Hello {data}, data received successfully!"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

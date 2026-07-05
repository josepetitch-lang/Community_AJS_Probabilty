from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from functions import procesar_mensaje_usuario

app = Flask(__name__)
CORS(app)  
@app.route('/', methods=['GET'])
def home():
    return "Servidor de IA activo."


@app.route('/api/chat', methods=['POST'])
@app.route('/api/chat/', methods=['POST'])
def chat_endpoint():
    try:
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({"error": "Falta el campo 'message'"}), 400
            
        user_message = data['message']
        bot_response = procesar_mensaje_usuario(user_message)
        
        return jsonify({"response": bot_response})
        
    except Exception as e:
        return jsonify({"response": f"Error en la IA: {str(e)}"}), 500

if __name__ == '__main__':
    
    app.run(host='127.0.0.1', port=5000, debug=True)
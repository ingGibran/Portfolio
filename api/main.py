import os
from dotenv import load_dotenv
from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType

load_dotenv()

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:8000",
    "http://127.0.0.1:8000"
]

allowed_origins_env = os.getenv("ALLOWED_ORIGINS")
if allowed_origins_env:
    origins.extend([origin.strip() for origin in allowed_origins_env.split(",")])

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

conf = ConnectionConfig(
    MAIL_USERNAME = "alegizago@gmail.com",
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD"),
    MAIL_FROM = "alegizago@gmail.com",
    MAIL_PORT = 587,
    MAIL_SERVER = "smtp.gmail.com",
    MAIL_STARTTLS = True,
    MAIL_SSL_TLS = False,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)

class ContactSchema(BaseModel):
    email_visitor: EmailStr
    subject: str
    message: str

def crear_template_contacto(email_visitor: str, asunto: str, mensaje: str):
    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; }}
            .card {{ max-width: 600px; margin: 20px auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }}
            .header {{ border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-bottom: 20px; }}
            .label {{ font-weight: bold; color: #555; }}
            .message-box {{ background: #f9f9f9; border-left: 4px solid #007bff; padding: 15px; margin: 15px 0; font-style: italic; }}
            .btn {{ display: inline-block; background-color: #28a745; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 10px; }}
        </style>
    </head>
    <body>
        <div class="card">
            <div class="header">
                <h2>📬 Nuevo Mensaje de Contacto</h2>
            </div>
            
            <p><span class="label">De:</span> {email_visitor}</p>
            <p><span class="label">Asunto:</span> {asunto}</p>
            
            <div class="message-box">
                "{mensaje}"
            </div>

            <a href="mailto:{email_visitor}?subject=Re: {asunto}" class="btn">Responder correo</a>
        </div>
    </body>
    </html>
    """
    return html

@app.post("/submit-message")
async def contact_form(contact_data: ContactSchema, background_tasks: BackgroundTasks):
    
    admin_email = "alegizago@gmail.com" 
    
    html_content = crear_template_contacto(
        contact_data.email_visitor, 
        contact_data.subject, 
        contact_data.message
    )

    message = MessageSchema(
        subject=f"Nuevo Contacto: {contact_data.subject}",
        recipients=[admin_email], 
        body=html_content,
        subtype=MessageType.html,
        reply_to=[contact_data.email_visitor] 
    )

    fm = FastMail(conf)
    background_tasks.add_task(fm.send_message, message)

    return {"message": "Gracias por contactarnos. Hemos recibido tu mensaje."}
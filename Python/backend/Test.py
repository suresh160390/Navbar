
from email.message import EmailMessage
import ssl
import smtplib

def mail():
    # Sigin.js File Username & password & email    
    email = 'suresha003@gmail.com'
    
    mail_password='suresh@123'       
    email_sender='suresha003@gmail.com'  #'suresha16031990@gmail.com'
    email_password='cjru cepx vvsz fxfg'   # create App password on your gmail Account, Security, 2-Step Verification, App password click & Create
    email_receiver=email.lstrip().rstrip()
    # print(type(email_receiver))

    subject = 'Password Recovery'
    body = f'Your password is: {mail_password}'

    em=EmailMessage()              
    em['From'] = email_sender
    em['To'] = email_receiver
    em['Subject'] = subject
    
    em.set_content(body)
    contex=ssl.create_default_context()

    with smtplib.SMTP_SSL("smtp.gmail.com",465,context=contex) as smtp:
        smtp.login(email_sender,email_password)
        smtp.sendmail(email_sender,email_receiver,em.as_string())

if __name__=="__main__":        
    mail()    
    
            
  
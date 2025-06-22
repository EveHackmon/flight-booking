# קח image בסיסי של Node.js
FROM node:18

# צור תקייה באפליקציה
WORKDIR /app

# העתק קבצי תלויות
COPY package*.json ./

# התקנת הספריות
RUN npm install

# העתק שאר קבצי הפרויקט
COPY . .

# פתח את הפורט שהשרת עובד עליו
EXPOSE 8080

# הפעלת השרת
CMD ["npm", "start"]

# 🟢 PQRSmart Backend (NestJS)

API RESTful construida con **NestJS** y **TypeORM** para gestionar usuarios, roles, autenticación JWT y el flujo de peticiones **PQRS**.  
Incluye validación de datos con **class-validator**, protección de rutas mediante **Guards**, y persistencia en **PostgreSQL**.  
Está diseñada para integrarse con el frontend en **Next.js**, ofreciendo seguridad y escalabilidad.

---

## ✨ Características principales
- 🚀 API RESTful con **NestJS** y **TypeORM**.  
- 🔑 Autenticación y autorización con **JWT** y roles (`user`, `doctor`, `secretaria`).  
- 🛡️ Validaciones avanzadas con **DTOs y ValidationPipe**.  
- 🔗 Configuración de **CORS** para integrarse con el frontend.  
- 🗄️ Creación automática de tablas y migraciones con **PostgreSQL**.  
- 📦 Estructura modular escalable (módulos de usuarios, citas, PQRS).

---

## 🚀 Instalación y uso

### 📦 Requisitos previos
- Node.js 18+
- PostgreSQL
- npm o yarn

### ⚙️ Pasos de instalación
```bash
# Clonar repositorio
git clone <URL_DEL_REPO_BACKEND>
cd pqrsmart-backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env   # edita las credenciales de la base de datos

# Ejecutar en desarrollo
npm run start:dev

El backend estará disponible en: **http://localhost:8080**

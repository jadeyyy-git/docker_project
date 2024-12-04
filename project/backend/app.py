# app.py

from fastapi import FastAPI
import psycopg2

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello from FastAPI"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

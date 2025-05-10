// app/api/contact/route.js
export async function POST(req) {
    try {
      const body = await req.json(); // Lire le JSON envoyé
      const { name, email, subject, message } = body;
  
      // Validation simple
      if (!name || !email || !message) {
        return new Response(JSON.stringify({ message: "Champs requis manquants." }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      // Simule l'envoi (ex. : par mail ou enregistrement)
      console.log("Nouveau message reçu :", { name, email, subject, message });
  
      return new Response(JSON.stringify({ message: "Message envoyé avec succès" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Erreur serveur." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  
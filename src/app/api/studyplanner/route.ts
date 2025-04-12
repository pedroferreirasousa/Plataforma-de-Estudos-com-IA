export async function POST(req: Request) {
    const { topic } = await req.json();

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-4-scout-17b-16e-instruct',
          messages: [
            {
              role: 'user',
              content: `Crie um plano de estudos para o tema: ${topic}, em forma de lista. bem explicativo, com exemplos e separando bem o titulo do plano de estudos e o conteudo.`,
            },
          ],
        }),
      });
  
      const data = await response.json();
      console.log('Resposta da API Groq:', data);
  
      if (!response.ok) {
        console.error('Erro da API:', data);
        return new Response('Erro ao gerar plano', { status: 500 });
      }
  
      return new Response(JSON.stringify({ result: data.choices[0].message.content }), {
        status: 200,
      });
    } catch (error) {
      console.error('Erro ao chamar API:', error);
      return new Response('Erro interno', { status: 500 });
    }
  }

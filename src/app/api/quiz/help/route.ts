import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { topic, amount } = await request.json();

    if (!topic || !amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json({ error: 'Parâmetros inválidos.' }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    const groqApiUrl = "https://api.groq.com/openai/v1/chat/completions";

    if (!apiKey) {
      console.error('Falta a API key do Groq');
      return NextResponse.json({ error: 'Falta a API key do Groq' }, { status: 500 });
    }

    const prompt = `Gere ${amount} perguntas de múltipla escolha sobre o tópico "${topic}". Para cada pergunta, forneça a pergunta, 4 opções (uma correta e três incorretas) e a resposta correta. Formate a resposta como um array de objetos JSON, onde cada objeto tem as chaves: "question", "options" (um array de strings) e "correctAnswer" (uma string).`;

    const response = await fetch(groqApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erro ao gerar perguntas com o Groq:', errorData);
      return NextResponse.json({ error: 'Erro ao gerar perguntas com o Groq.' }, { status: 500 });
    }
    const data = await response.json();
    const groqContent = data.choices[0]?.message?.content;

    console.log('Resposta do Groq:', groqContent);

    if (!groqContent) {
      return NextResponse.json({ error: 'Resposta do Groq em formato inválido.' }, { status: 500 });
    }

    console.log('conteudo bruto do Groq antes do parse:', groqContent);
    let generatedQuestions;
    try {
      const startIndex = groqContent.indexOf('[');
      const endIndex = groqContent.lastIndexOf(']');

      if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
        console.error('JSON inválido encontrado na resposta do Groq (delimitadores de array ausentes ou incorretos):', groqContent);
        return NextResponse.json({ error: 'Resposta do Groq em formato JSON inválido (delimitadores de array ausentes ou incorretos).' }, { status: 500 });
      }

      const jsonString = groqContent.substring(startIndex, endIndex + 1);

      generatedQuestions = JSON.parse(jsonString);
      if (!Array.isArray(generatedQuestions)) {
        return NextResponse.json({ error: 'Resposta do Groq em formato inválido (esperava um array).' }, { status: 500 });
      }
      console.log('Resposta do Groq (parsed):', generatedQuestions);

    } catch (error: unknown) {
      console.error('Erro ao analisar a resposta JSON do Groq:', error);
      console.error('Resposta bruta do Groq (dentro do catch):', groqContent);
      return NextResponse.json({ error: 'Resposta do Groq em formato JSON inválido.' }, { status: 500 });
    }
    return NextResponse.json({ questions: generatedQuestions });
  } catch (error: unknown) {
    console.error('Erro ao processar a requisição de perguntas (Groq):', error);
    return NextResponse.json({ error: 'Erro interno do servidor ao gerar perguntas.' }, { status: 500 });
  }
}
export const generateStudyPlan = async (topic: string): Promise<{ result: string }> => {
    const response = await fetch('../api/studyplanner/route.ts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });
  
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data?.error || 'Erro ao gerar plano de estudos.');
    }
  
    const data = await response.json();
    return data;
  };
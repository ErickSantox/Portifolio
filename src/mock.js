// Mock data for Erick Santos Portfolio
import darkAddExpense from './assets/images/dark-add-expense.png'
import dashboardImg from './assets/images/dark-Dashboard.png'
import darkEditExpense from './assets/images/dark-edit-expense.png'
import darkHistoryWithPremium from './assets/images/dark-history-with-premium.png'
import loginImg from './assets/images/dark-login.png'
import codigoImp from './assets/images/codigo.png'
import diagramaImp from './assets/images/diagrama.png'
import codigoIugu from './assets/images/codigoIugu.png'





export const mockData = {
  hero: {
    name: "Erick Santos",
    title: "Desenvolvedor Fullstack",
    subtitle: "Java Backend",
    description: "2 anos de experiência criando soluções robustas e escaláveis, com expertise em backend Java/C# e desenvolvimento web completo.",
    resumeUrl: "/assets/Cv_Erick_SantosPdf.pdf"
  },
  
  skills: {
    backend: [
      "Java 17",
      "Spring Boot", 
      "Spring Security",
      "JWT & OAuth",
      "C# (.NET)",
      "ASP.NET"
    ],
    frontend: [
      "Angular",
      "TypeScript", 
      "Ionic"
    ],
    database: [
      "SQL Server",
      "PostgreSQL"
    ],
    tools: [
      "JUnit",
      "Postman",
      "Git & GitHub"
    ],
    concepts: [
      "API REST",
      "RESTful",
      "SOAP"
    ]
  },

  projects: [
    {
      id: 1,
      name: "Pobre Fino",
      subtitle: "Aplicativo de Controle Financeiro",
      description: "Desenvolvimento fullstack de uma aplicação mobile com boas práticas de JPA, segurança JWT e criptografia. API para envio assíncrono de e-mails e cálculos automáticos de saldo mensal.",
      features: [
        "Interface mobile com Angular + Ionic",
        "Dashboard histórico interativo",
        "Login biométrico",
        "Notificações automáticas para despesas programadas"
      ],
      technologies: ["Java 17", "Spring Boot", "Angular", "TypeScript", "Ionic", "PostgreSQL"],
      images: [
        loginImg,
        darkHistoryWithPremium,
        dashboardImg,
        darkAddExpense,
        darkEditExpense,
        darkHistoryWithPremium
      ],
      category: "Mobile Development",
      status: "Concluído"
    },
    {
      id: 2,
      name: "Automatizador de Processos (Migração AVA)",
      subtitle: "Aplicação Desktop .NET para Processamento de Dados",
      description: "Desenvolvi uma ferramenta desktop em C# para automatizar a importação e validação de dados de presença em eventos a partir de planilhas Excel. O sistema valida cruzando informações de duas fontes de dados (inscrição e participação), garantindo a consistência antes de integrá-los ao sistema principal via API.",
      features: [
        "Leitura e parsing de arquivos .xls e .xlsx com a biblioteca NPOI.",
        "Validação de regras de negócio complexas para garantir a integridade dos dados.",
        "Redução drástica de tempo no processo (de horas para minutos).",
        "Interface intuitiva para seleção de arquivos e acompanhamento do processo.",
        "Geração automática de logs de erro para auditoria e fácil depuração."
      ],
      technologies: ["C#", ".NET Framework", "Windows Forms", "NPOI (Excel API)", "SQL Server"],
      images: [
        codigoImp,
        diagramaImp
      ],
      category: "Desktop Automation",
      status: "Em Produção"
    },
    {
      id: 3,
      name: "Serviço de Integração de Pagamentos",
      subtitle: "Backend C# para Sincronização de Dados Financeiros",
      description: "Desenvolvi um worker service em C# para automatizar a extração diária de dados financeiros da API de pagamentos IUGU. O serviço é responsável por buscar, processar e sincronizar as faturas de 8 subcontas com o Data Warehouse da empresa, garantindo a consistência e atualização dos dados para análise.",
      features: [
        "Comunicação com API REST externa utilizando RestClient.",
        "Implementação de paginação para lidar com grandes volumes de dados de forma eficiente.",
        "Lógica de 'retry' (3 tentativas) para garantir a resiliência contra falhas temporárias na API.",
        "Operação de 'Upsert' no banco de dados (SQL Server) para inserir novos registros ou atualizar existentes.",
        "Funções auxiliares para tratamento e limpeza de dados monetários em diferentes formatos."
      ],
      technologies: ["C#", ".NET", "API REST", "Newtonsoft.Json", "SQL Server"],
      images: [
        codigoIugu
      ],
      category: "Backend Service",
      status: "Em Produção"
    }
  ],

  experience: {
  years: "2",
  companies: ["SEICHO NO IE DO BRASIL"],
  specialties: ["Backend C#", "ASP.NET","API RESTful" ,"API SOAP", "Database Design", "SQL Server", "JavaScript", "RDLC"]
  },

  contact: {
    email: "ericksantosjobs@gmail.com",
    linkedin: "https://www.linkedin.com/in/erick-santos-62271419a/",
    github: "https://github.com/ErickSantox",
    instagram: "@santx.erick"
  },


};
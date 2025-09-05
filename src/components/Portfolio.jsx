import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Server, 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail,
  Instagram,
  Menu,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { mockData } from "../mock";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Início" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Projetos" },
    { id: "experience", label: "Experiências"},
    { id: "contact", label: "Contato" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent"
            >
              Erick Santos
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.id ? "text-purple-400" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-black/95 border-t border-purple-500/20"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 hover:bg-purple-500/10 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/10"></div>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                y: [null, -20, 20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                {mockData.hero.name}
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-purple-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {mockData.hero.title}
            </motion.h2>
            
            <motion.h3 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {mockData.hero.subtitle}
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {mockData.hero.description}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                Ver Projetos
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  // Mock download - in production this would be a real PDF
                  const link = document.createElement('a');
                  link.href = mockData.hero.resumeUrl;
                  link.download = 'CV-Erick-Santos.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Habilidades Técnicas
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis
            </p>
          </motion.div>

          <Tabs defaultValue="backend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-gray-800 mb-8">
              <TabsTrigger value="backend" className="data-[state=active]:bg-purple-600">
                <Server className="mr-2 h-4 w-4" />
                Backend
              </TabsTrigger>
              <TabsTrigger value="frontend" className="data-[state=active]:bg-purple-600">
                <Code className="mr-2 h-4 w-4" />
                Frontend
              </TabsTrigger>
              <TabsTrigger value="database" className="data-[state=active]:bg-purple-600">
                <Database className="mr-2 h-4 w-4" />
                Database
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-purple-600">
                Tools
              </TabsTrigger>
              <TabsTrigger value="concepts" className="data-[state=active]:bg-purple-600">
                Concepts
              </TabsTrigger>
            </TabsList>

            {Object.entries(mockData.skills).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="group"
                    >
                      <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                        <CardContent className="p-4 text-center">
                          <span className="text-white group-hover:text-purple-300 transition-colors font-medium">
                            {skill}
                          </span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

  {/* Projects Section */}
  <section id="projects" className="py-20 bg-black">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
          Projetos em Destaque
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Soluções que desenvolvi aplicando as melhores práticas e tecnologias modernas
        </p>
      </motion.div>

      <div className="space-y-16">
        {mockData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-500 overflow-hidden group">
              <div className={`grid md:grid-cols-2 gap-0`}>

                              {/* LÓGICA CONDICIONAL ATUALIZADA PARA 3 CASOS */}
              {project.images.length === 1 ? (
                // NOVO LAYOUT: Para projetos com UMA imagem
                <div className={`p-6 flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <a href={project.images[0]} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <img
                      src={project.images[0]}
                      alt={`${project.name} - Imagem Principal`}
                      className="w-full max-w-xl mx-auto h-auto object-contain rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
                    />
                  </a>
                </div>

              ) : project.images.length === 2 ? (
                // LAYOUT LADO A LADO: Para projetos com DUAS imagens (MODIFICADO)
                // Adicionado 'min-h-[300px]' e 'h-full'
                <div className={`p-6 flex items-center justify-center col-span-2 min-h-[300px] md:min-h-[400px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full"> {/* Adicionado 'h-full' aqui */}
                    {project.images.map((image, imgIndex) => (
                      <a key={imgIndex} href={image} target="_blank" rel="noopener noreferrer" className="block h-full"> {/* Adicionado 'h-full' aqui */}
                        <img
                          src={image}
                          alt={`${project.name} - Imagem ${imgIndex + 1}`}
                          // Mudado para 'object-cover' para tentar preencher mais, mas pode cortar.
                          // Se preferir que a imagem NUNCA seja cortada, use 'object-contain'.
                          // Com 'h-full', 'object-contain' vai esticar o máximo sem cortar.
                          className="w-full h-full object-contain rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                // LAYOUT GALERIA: Para projetos com MUITAS imagens
                <div className={`p-4 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex flex-col gap-2">
                    <a href={project.images[0]} target="_blank" rel="noopener noreferrer" className="block">
                      <img
                        src={project.images[0]}
                        alt={`${project.name} - Imagem Principal`}
                        className="w-full max-w-sm mx-auto h-auto object-contain rounded-lg border border-gray-700 hover:border-purple-500 transition-all"
                      />
                    </a>
                    <div className="grid grid-cols-4 gap-2">
                      {project.images.slice(1, 5).map((image, imgIndex) => (
                        <a key={imgIndex} href={image} target="_blank" rel="noopener noreferrer" className="block">
                          <img
                            src={image}
                            alt={`${project.name} - screenshot ${imgIndex + 2}`}
                            className="w-full h-auto object-contain rounded-md border border-gray-800 hover:border-purple-500 transition-all"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

                {/* Project Info (Esta parte não muda) */}
                <div className="p-8 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-purple-600 text-white">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="border-green-500 text-green-400">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-purple-300 text-lg">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Principais Features:</h4>
                      <ul className="text-gray-400 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-300 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {/* Se tiver um link para o projeto, ele viria aqui */}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

      {/* Experience Section*/}
      <section id="experience" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          {/* Título da Seção */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Experiência Profissional
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Minha jornada no desenvolvimento de software e principais áreas de atuação.
            </p>
          </motion.div>

          {/* Grid com os Cards de Informação */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Card de Anos de Experiência e Empresas */}
            <div className="space-y-8">
              <Card className="bg-gray-900 border-gray-700 p-6 text-center">
                <CardHeader>
                  <CardTitle className="text-purple-400 text-6xl font-bold">
                    {mockData.experience.years}+
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg">
                    Anos de Experiência
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-gray-900 border-gray-700 p-6">
                <CardHeader>
                  <CardTitle className="text-white mb-2">Empresas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-400 space-y-2">
                    {mockData.experience.companies.map((company) => (
                      <li key={company} className="flex items-center">
                        <span className="text-purple-400 mr-2">•</span>
                        {company}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Card de Especialidades */}
            <Card className="bg-gray-900 border-gray-700 p-6">
              <CardHeader>
                <CardTitle className="text-white mb-4">Principais Especialidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {mockData.experience.specialties.map((specialty) => (
                    <Badge 
                      key={specialty} 
                      variant="outline" 
                      className="border-purple-500 text-purple-300 text-md px-4 py-2"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Interessado em trabalhar juntos ou tem alguma pergunta? Entre em contato!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Mail className="h-6 w-6" />,
                  label: "Email",
                  value: mockData.contact.email,
                  href: `mailto:${mockData.contact.email}`,
                  color: "hover:bg-blue-500/10 hover:border-blue-500"
                },
                {
                  icon: <Linkedin className="h-6 w-6" />,
                  label: "LinkedIn",
                  value: "Erick Santos",
                  href: mockData.contact.linkedin,
                  color: "hover:bg-blue-600/10 hover:border-blue-600"
                },
                {
                  icon: <Github className="h-6 w-6" />,
                  label: "GitHub",
                  value: "ErickSantox",
                  href: mockData.contact.github,
                  color: "hover:bg-gray-500/10 hover:border-gray-500"
                },
                {
                  icon: <Instagram className="h-6 w-6" />,
                  label: "Instagram",
                  value: mockData.contact.instagram,
                  href: `https://instagram.com/${mockData.contact.instagram.replace('@', '')}`,
                  color: "hover:bg-pink-500/10 hover:border-pink-500"
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  className={`group p-6 bg-gray-800 border border-gray-700 rounded-xl transition-all duration-300 ${contact.color}`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{contact.label}</p>
                      <p className="text-gray-400 text-sm">{contact.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Erick Santos. Desenvolvido com React e muito ☕
          </p>
        </div>
      </footer>
    </div>
  );


  
};


export default Portfolio;
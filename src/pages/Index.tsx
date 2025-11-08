import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{backgroundImage: 'url(https://cdn.poehali.dev/projects/097dd926-923f-4334-aff7-3f5baeb72a58/files/d13d7117-0ec0-4eca-ae3e-487fd5996853.jpg)'}}
        ></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl">
              FORTNITE
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8 text-foreground drop-shadow-lg">
              Битва за Победу Начинается Здесь
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all hover:scale-105">
                <Icon name="Play" className="mr-2" size={24} />
                Играть Сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold text-lg px-8 py-6 rounded-xl transition-all hover:scale-105 backdrop-blur-sm bg-background/20">
                <Icon name="Download" className="mr-2" size={24} />
                Скачать
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 animate-slide-up">
            Почему Стоит Начать Играть?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/097dd926-923f-4334-aff7-3f5baeb72a58/files/d13d7117-0ec0-4eca-ae3e-487fd5996853.jpg" 
                  alt="Battle Royale"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 shadow-lg">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">100 Игроков</h3>
                <p className="text-muted-foreground text-lg">
                  Сражайся с 99 игроками на огромном острове в эпической битве за выживание
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30 hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/097dd926-923f-4334-aff7-3f5baeb72a58/files/b5744975-36ba-44a6-b136-d01396878408.jpg" 
                  alt="Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 shadow-lg">
                  <Icon name="Hammer" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Строительство</h3>
                <p className="text-muted-foreground text-lg">
                  Стройте укрытия и защищайся! Создавай уникальные тактические преимущества
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:scale-105 transition-all duration-300 animate-fade-in overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/097dd926-923f-4334-aff7-3f5baeb72a58/files/7efa10e5-4e29-422b-bc73-393e64ea64fc.jpg" 
                  alt="Victory"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 shadow-lg">
                  <Icon name="Zap" size={32} className="text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Динамичный Бой</h3>
                <p className="text-muted-foreground text-lg">
                  Быстрые перестрелки, мощное оружие и невероятные комбо-атаки ждут тебя
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Режимы Игры
          </h2>
          <p className="text-center text-muted-foreground text-xl mb-16">
            Выбери свой стиль битвы
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="group overflow-hidden bg-card hover:border-primary transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <Icon name="Target" size={64} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Battle Royale</h3>
                <p className="text-muted-foreground">
                  Классический режим: 100 игроков, один победитель. Выживи любой ценой!
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden bg-card hover:border-secondary transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                <Icon name="Users" size={64} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Командный</h3>
                <p className="text-muted-foreground">
                  Объединяйся с друзьями в команды по 2-4 человека и сражайтесь вместе
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden bg-card hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                <Icon name="Sparkles" size={64} className="text-background group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Креативный</h3>
                <p className="text-muted-foreground">
                  Создавай свои миры и правила. Безграничные возможности для творчества!
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden bg-card hover:border-primary transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
                <Icon name="Trophy" size={64} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Арена</h3>
                <p className="text-muted-foreground">
                  Соревновательный режим для профессионалов. Докажи свое мастерство!
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden bg-card hover:border-secondary transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
                <Icon name="Sword" size={64} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Особые События</h3>
                <p className="text-muted-foreground">
                  Уникальные временные режимы с эксклюзивными наградами и челленджами
                </p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden bg-card hover:border-accent transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-orange-600 to-yellow-400 flex items-center justify-center">
                <Icon name="Gamepad2" size={64} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Мини-игры</h3>
                <p className="text-muted-foreground">
                  Быстрые раунды с особыми правилами. Веселье и экшен без остановки!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 animate-float">
            Готов к Битве?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйся к миллионам игроков по всему миру. Скачай игру бесплатно и начни свой путь к победе прямо сейчас!
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-background font-bold text-xl px-12 py-8 rounded-xl transition-all hover:scale-110 shadow-2xl">
            <Icon name="Rocket" className="mr-2" size={28} />
            Начать Играть
          </Button>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Fortnite Fan Site. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
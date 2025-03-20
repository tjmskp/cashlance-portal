
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, ExternalLink, Clock, Check } from "lucide-react";

interface GamePlayerProps {
  isOpen: boolean;
  onClose: () => void;
  game: {
    id: string;
    name: string;
    gameUrl: string;
    rules: string;
    reward: string;
  };
}

export function GamePlayer({ isOpen, onClose, game }: GamePlayerProps) {
  const [timeSpent, setTimeSpent] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [gameWindow, setGameWindow] = useState<Window | null>(null);
  
  // Track time spent on the game
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isOpen && !completed) {
      interval = setInterval(() => {
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isOpen, completed]);
  
  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  // Handle game launch
  const launchGame = () => {
    try {
      const newWindow = window.open(
        game.gameUrl,
        'GameWindow',
        'width=800,height=600,resizable=yes,scrollbars=yes'
      );
      
      if (newWindow) {
        setGameWindow(newWindow);
        
        // Listen for window close event
        const checkWindowClosed = setInterval(() => {
          if (newWindow.closed) {
            clearInterval(checkWindowClosed);
            toast.info("Game window closed");
          }
        }, 1000);
      } else {
        toast.error("Popup blocked. Please allow popups for this site.");
      }
    } catch (error) {
      console.error("Error opening game:", error);
      toast.error("Failed to open game window");
    }
  };
  
  // Handle completion verification
  const verifyCompletion = () => {
    // In a real implementation, this would check with your backend
    // to verify if the user completed the task
    setCompleted(true);
    toast.success(`Congratulations! You earned ${game.reward}`, {
      duration: 5000,
    });
    
    // Close the window if still open
    if (gameWindow && !gameWindow.closed) {
      gameWindow.close();
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{game.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between bg-secondary/30 p-3 rounded-md">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Time: {formatTime(timeSpent)}</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Reward: {game.reward}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Completion Rules:</h3>
            <p className="text-sm text-muted-foreground">{game.rules}</p>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            {!completed ? (
              <>
                <p className="text-sm text-center">Click the button below to play the game in a new window</p>
                <div className="flex justify-center">
                  <Button 
                    onClick={launchGame} 
                    className="cashlance-button"
                  >
                    Play Game <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 dark:bg-green-900/20 p-4 rounded-md text-center"
              >
                <Check className="mx-auto mb-2 h-6 w-6 text-green-600 dark:text-green-400" />
                <p className="font-medium text-green-800 dark:text-green-300">Task Completed!</p>
                <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                  {game.reward} has been added to your balance
                </p>
              </motion.div>
            )}
          </div>
          
          {!completed && (
            <div className="mt-6">
              <Button 
                onClick={verifyCompletion} 
                variant="outline" 
                className="w-full"
              >
                I've Completed the Task
              </Button>
            </div>
          )}
        </div>
        
        <div className="flex justify-end">
          <Button variant="ghost" onClick={onClose}>
            <X className="mr-2 h-4 w-4" /> Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

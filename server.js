const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/plan', (req, res) => {
  const goal = (req.body.goal || '').trim();
  if (!goal) return res.status(400).json({ error: 'Goal is required' });

  const plan = [
    `Define scope for: ${goal}`,
    `Build a smallest testable version of ${goal}`,
    `Demo and write one improvement for next sprint`
  ];

  res.json({
    goal,
    duration: '25 minutes',
    plan,
    successCriteria: `You can demo one concrete outcome for: ${goal}`,
    reflection: 'What worked? What blocked you? What is your next 25-minute sprint?'
  });
});

app.listen(3000, () => console.log('FocusSprint AI running on http://localhost:3000'));

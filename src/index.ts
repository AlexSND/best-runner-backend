import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import { v4 } from 'uuid';

const types = [
  {
    id: '1',
    name: 'Бег'
  },
  {
    id: '2',
    name: 'Велосипед'
  },
  {
    id: '3',
    name: 'Лыжи'
  },
  {
    id: '4',
    name: 'Ходьба'
  },
];

let trainings = [
  {
    id: '1',
    typeId: '1',
    distance: 5,
    description: 'Не плохо пробежался',
    date: '2021-12-12T09:33:14.079Z'
  },
  {
    id: '2',
    typeId: '2',
    distance: 25,
    description: 'Усердно покрутил педали',
    date: '2021-12-12T09:33:14.079Z'
  },
  {
    id: '3',
    typeId: '3',
    distance: 10,
    description: 'Прокатился по лыжне',
    date: '2021-12-12T09:33:14.079Z'
  },
  {
    id: '4',
    typeId: '4',
    distance: 2,
    description: 'Прогулялся до магазина',
    date: '2021-12-12T09:33:14.079Z'
  },
];

const getTypes = (req: Request, res: Response) => {
  setTimeout(() => {
    res.status(200).json(types);
  }, 1000);
};

const getTrainings = (req: Request, res: Response) => {
  setTimeout(() => {
    res.status(200).json(trainings);
  }, 1000);
};

const createTraining = (req: Request, res: Response) => {
  setTimeout(() => {
    const newTraining = {...req.body, id: v4()};
    trainings.push(newTraining);
    res.status(201).json(newTraining);
  }, 1000);
};

const deleteTraining = (req: Request, res: Response) => {
  setTimeout(() => {
    const id = req.params.id;
    trainings = trainings.filter(training => training.id !== id);
    res.status(200).json('Объект удален');
  }, 1000);
};

const updateTraining = (req: Request, res: Response) => {
  setTimeout(() => {
    const id = req.params.id;
    const index = trainings.findIndex(training => training.id !== id);
    trainings[index] = req.body;
    res.status(200).json(trainings[index]);
  }, 1000);
}

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/types', getTypes)
app.get('/trainings', getTrainings)
app.post('/trainings', createTraining)
app.delete('/trainings/:id', deleteTraining)
app.put('/trainings/:id', updateTraining)

app.get('/types', (req, res) => {
  res.status(200).json(types)
})

app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
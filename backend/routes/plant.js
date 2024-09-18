import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate';
import express from 'express';
import zod from 'zod';

const router = express.Router();

const Plantschema = zod.object({
    plantName: zod.string(),
    plantId: zod.number(),
    sciName: zod.string(),
    description: zod.string().optional(),
    recipes: zod.array(zod.string()).optional(),
    region: zod.array(zod.string()).optional(),
    usage: zod.array(zod.string()).optional(),
})

router.post('/', async (req, res) => {
    const result = Plantschema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: "invalid plant data",
            error: result.error.errors
        })
    }
    try {
        const prisma = new PrismaClient().$extends(withAccelerate());
        const plant = await prisma.plant.create({
            data: {
                plantName: req.body.plantName,
                plantId: req.body.plantId,
                sciName: req.body.sciName,
                description: req.body.description,
                recipes: req.body.recipes,
                region: req.body.region,
                usage: req.body.usage,
            },
        });

        res.json({
            message: `Successfully uploaded the plant data for ${plant.plantName}`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error while uploading plant data",
            error: error.message || "Unknown error",
        });
    }
});


router.put('/', async (req, res) => {
})

router.get('/bulk', async (req, res) => {
    
    try {
        const prisma = new PrismaClient().$extends(withAccelerate());
        const plants = await prisma.plant.findMany();
        return res.json({
            plants
        })
    } catch (error) {
        res.status(400).json({
            message:"cannot get the plants data",
            error: error.message
        })
    }finally{
        await prisma.$disconnect();
    }
    
})

router.get('/:id', async (req, res) => {
    const prisma = new PrismaClient().$extends(withAccelerate());
    const id = parseFloat(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({
            message: "invalid plant id format "
        })
    }
    try {
        const plant = await prisma.plant.findUnique({
            where: {
                id: id,
            },
            select: {
                plantName: true,
                plantId: true,
                sciName: true,
                description: true,
                recipes: true,
                region: true,
                usage: true,
            },
        });

        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }

        res.json({
            plant,
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Error retrieving plant data', error: error.message });
    }

})

router.post('/:userId/addbookmark', async (req, res) => {
    const { userId } = req.params;
    const { plantId } = req.body;
    const prisma = new PrismaClient().$extends(withAccelerate());
    try {
        const newBookmark = await prisma.bookmark.create({
            data: {
                userId: parseInt(userId),
                plantId: parseInt(plantId),
            },
        });
        res.status(201).json(newBookmark);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create bookmark', details: error.message });
    }
});

router.get('/:userId/allbookmarks', async (req, res) => {
    const prisma = new PrismaClient().$extends(withAccelerate());
    const { userId } = req.params;
    try {
        const bookmarks = await prisma.bookmark.findMany({
            where: { userId: parseInt(userId) },
            include: { plant: true }, // Include plant details in the response
        });
        res.json(bookmarks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve bookmarks' });
    }
});

router.delete('/bookmarks/:bookmarkId', async (req, res) => {
    const prisma = new PrismaClient().$extends(withAccelerate());
    const { bookmarkId } = req.params;
    try {
        await prisma.bookmark.delete({
            where: { id: parseInt(bookmarkId) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete bookmark' });
    }
});



export default router;



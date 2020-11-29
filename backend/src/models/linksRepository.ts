import linkModel, { ILinkModel } from './linkModel';
import { Link } from './link';
import links from '../controllers/links';

function findByCode(code: string) {
    return linkModel.findOne<ILinkModel>({ where: { code } });
}

function add(link: Link) {
    return linkModel.create<ILinkModel>(link);
}

async function hit(code: string) {
    const link = await findByCode(code);

    if (!link) {
        return null;
    }

    // "!" apontaria uma advertência pois o resultado poderia ser "nulo"; "!" assumimos o risco
    link.hits!++;
    await link.save();
    return link;
}

export default {
    findByCode,
    add,
    hit
}
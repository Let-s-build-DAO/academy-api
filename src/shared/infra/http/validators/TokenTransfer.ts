import { celebrate, Joi, Segments } from 'celebrate';


export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    amount: Joi.number().required(),
    address: Joi.string().required(),
    txId: Joi.string().required()
  }),
});
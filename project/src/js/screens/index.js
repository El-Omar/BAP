import welcome from './sections/welcome';
import intro from './sections/intro';
import pipe from './sections/pipe';
import fertility from './sections/fertility';
import aging from './sections/aging';
import ivf from './sections/ivf';
import freeze from './sections/freeze';
import outro from './sections/outro';
import ending from './sections/ending';

// {
export default () => {
  const sections = new Map();

  sections.set(`welcome`, welcome);
  sections.set(`intro`, intro);
  sections.set(`pipe`, pipe);
  sections.set(`fertility`, fertility);
  sections.set(`aging`, aging);
  sections.set(`ivf`, ivf);
  sections.set(`freeze`, freeze);
  sections.set(`outro`, outro);
  sections.set(`ending`, ending);

  return sections;
};

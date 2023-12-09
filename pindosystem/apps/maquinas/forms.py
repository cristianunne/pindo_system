from django import forms
from maquinas.models import Maquinas


class EditMaquinasForm(forms.ModelForm):
    
    class Meta:
        model = Maquinas
        fields = ['nombre', 'marca', 'modelo', 'image']


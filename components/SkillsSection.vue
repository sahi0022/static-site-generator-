<template>
  <div class="container my-5">
    <h2 class="text-center mb-5">My Skills</h2>
    <div class="row text-center">
      <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" v-for="skill in skills" :key="skill.name">
        <div
          class="progress-ring"
          @mouseenter="startAnimation(skill)"
          @mouseleave="resetAnimation(skill)"
        >
          <svg class="circle" viewBox="0 0 120 120">
            <circle class="circle-background" cx="60" cy="60" r="54" stroke-width="12" />
            <circle
              class="circle-progress"
              cx="60"
              cy="60"
              r="54"
              stroke-width="12"
              stroke="#6c8eaf"
            />
          </svg>
          <div class="percentage">{{ skill.percent }}%</div>
        </div>
    
        <i :class="['mb-3', skill.icon, 'skill-icon']"></i> 
        <h5 class="skill-name text-primary">{{ skill.name }}</h5> 
        <p>{{ skill.level }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsSection',
  props: {
    skills: Array,
  },
  data() {
    return {
      hoveredSkill: null,  
    };
  },
  methods: {
    startAnimation(skill) {
      this.hoveredSkill = skill.name;
    },

    resetAnimation(skill) {
      this.hoveredSkill = null; 
    },
  },
};
</script>

<style scoped>

h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #b69928;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.progress-ring {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 120px;
  margin: 20px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
}


.progress-ring:hover {
  transform: translateY(-10px) rotateY(15deg) rotateX(15deg); 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  filter: brightness(1.1); 
}


.circle-background {
  fill: none;
  stroke: #144361;  
}


.circle-progress {
  fill: none;
  stroke-linecap: round;
  stroke: #144361; 
  transition: stroke-dashoffset 1s ease;
}

.percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  opacity: 0.9;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.skill-name {
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  transition: color 0.3s ease, transform 0.3s ease;
}

.progress-ring:hover .skill-name {
  color: #6c8eaf; 
  transform: translateY(-5px); 
}


.skill-icon {
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.progress-ring:hover .skill-icon {
  color: #ffffff; 
  transform: scale(1.1); 
}


@media (max-width: 1199px) {

  .progress-ring {
    width: 100px;
    height: 100px;
  }

  .skill-name {
    font-size: 1.1rem;
  }
}

@media (max-width: 991px) {

  .progress-ring {
    width: 90px;
    height: 90px;
  }

  .skill-name {
    font-size: 1rem;
  }

  .skill-icon {
    font-size: 1.8rem;
  }
}

@media (max-width: 767px) {

  .progress-ring {
    width: 80px;
    height: 80px;
  }

  .skill-name {
    font-size: 0.9rem;
  }

  .skill-icon {
    font-size: 1.6rem;
  }
}

@media (max-width: 576px) {

  .progress-ring {
    width: 70px;
    height: 70px;
  }

  .skill-name {
    font-size: 0.85rem;
  }

  .skill-icon {
    font-size: 1.4rem;
  }
}
</style>
